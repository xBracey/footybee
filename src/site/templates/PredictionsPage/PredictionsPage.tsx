import React, { useEffect, useState } from "react";
import {
  AsyncSelectInput,
  Button,
  PredictionsTable,
  SelectInput,
} from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeamsPrediction,
  getGroupMatchPredictions,
  getTeams,
  predictGoldenBoot,
  predictWinner,
  saveGroupMatchPredictions,
  searchPlayers,
} from "redux/actions";
import { IRootState, types } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getGroupMatches } from "src/site/redux/actions/groupMatches";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { Page } from "templates";
import {
  ExtraFlex,
  ExtraFlexs,
  ExtraHeader,
  ExtraPredictionsContainer,
  ExtraText,
  PredictionsPageContainer,
} from "./PredictionsPage.styled";
import { predictionLock } from "src/site/lib/predictionLock";

export const PredictionsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: IRootState) => state.user);
  const groupMatches = useSelector((state: IRootState) => state.groupMatches);
  const groupMatchPredictions = useSelector(
    (state: IRootState) => state.groupMatchPredictions
  );
  const teams = useSelector((state: IRootState) => state.teams);

  const [teamOption, setTeamOption] = useState(null);
  const [playerOption, setPlayerOption] = useState(null);

  useEffect(() => {
    dispatch(getGroupMatches()).then(() => {
      // TODO maybe better way to do this
      setTimeout(() => {
        dispatch(getTeams());
      }, 500);
    });
  }, []);

  useEffect(() => {
    if (user.username) {
      // TODO fix
      dispatch(getGroupMatchPredictions());

      if (user.goldenBootPrediction)
        setPlayerOption({
          value: user.goldenBootPrediction,
          label: user.goldenBootPrediction,
        });

      if (user.winnerPrediction)
        setTeamOption({
          value: user.winnerPrediction,
          label: user.winnerPrediction,
        });
    }
  }, [user.username]);

  const groups: {
    [groupLetter: string]: IGroupMatch[];
  } = {};

  groupMatches.groupMatches.forEach(match => {
    if (groups[match.groupLetter]) {
      groups[match.groupLetter].push(match);
    } else {
      groups[match.groupLetter] = [match];
    }
  });

  const onSave = (predictions, teams) => {
    dispatch(saveGroupMatchPredictions(predictions)).then(({ data }) => {
      if (!data.error) {
        dispatch(addTeamsPrediction(teams)).then(({ data }) => {
          if (!data.error) {
            dispatch({
              type: types.message.MESSAGE_SET_MESSAGE,
              data: { message: "Successfully made predictions" },
            });
          }
        });
      }
    });
  };

  const groupMatchesComponent = Object.entries(groups).map(
    ([key, value], index) => (
      <PredictionsTable
        key={key}
        groupMatches={value}
        originalPredictions={groupMatchPredictions.predictions}
        originalPositions={teams.teams
          .filter(team => team.groupLetter === key && !!team.userPrediction)
          .sort((a, b) => a.userPrediction - b.userPrediction)
          .map(team => team.name)}
        title={`Group ${key}`}
        inverted={index % 2 === 0}
        onSave={onSave}
        isLocked={predictionLock}
      />
    )
  );

  const teamOptions = teams.teams.map(team => ({
    value: team.name,
    label: team.name,
  }));

  const loadPlayers = (searchTerm: string, callback) => {
    if (searchTerm.length > 2) {
      dispatch(searchPlayers(searchTerm)).then(({ data }) => {
        if (!data.error) {
          callback(
            data.data.map(player => ({
              value: player.name,
              label: player.name,
            }))
          );
        } else {
          callback([]);
        }
      });
    } else {
      callback([]);
    }
  };

  const saveWinner = () => {
    dispatch(predictWinner(teamOption.value)).then(({ data }) => {
      if (!data.error) {
        dispatch({
          type: types.message.MESSAGE_SET_MESSAGE,
          data: { message: "Successfully made winner prediction" },
        });
      }
    });
  };

  const saveGoldenBoot = () => {
    dispatch(predictGoldenBoot(playerOption.value)).then(({ data }) => {
      if (!data.error) {
        dispatch({
          type: types.message.MESSAGE_SET_MESSAGE,
          data: { message: "Successfully made golden boot prediction" },
        });
      }
    });
  };

  return (
    <PredictionsPageContainer>
      <Page title="Results" isLoggedIn={true}>
        <ExtraPredictionsContainer>
          <ExtraHeader>Extra Predictions</ExtraHeader>
          <ExtraFlexs>
            <ExtraFlex>
              <ExtraText>Predict the Euro 2021 Winner</ExtraText>
              <SelectInput
                options={teamOptions}
                option={teamOption}
                setOption={setTeamOption}
                placeholder={"Select a team"}
              />
              <Button
                text="Predict Winner"
                onClick={saveWinner}
                buttonType={"blue"}
                isLocked={predictionLock}
              />
            </ExtraFlex>
            <ExtraFlex>
              <ExtraText>Predict the Euro 2021 Golden Boot</ExtraText>
              <AsyncSelectInput
                loadOptions={loadPlayers}
                option={playerOption}
                setOption={setPlayerOption}
                placeholder={"Select a player"}
              />
              <Button
                text="Predict Golden Boot"
                onClick={saveGoldenBoot}
                buttonType={"blue"}
                isLocked={predictionLock}
              />
            </ExtraFlex>
          </ExtraFlexs>
        </ExtraPredictionsContainer>
        {groupMatchesComponent}
      </Page>
    </PredictionsPageContainer>
  );
};
