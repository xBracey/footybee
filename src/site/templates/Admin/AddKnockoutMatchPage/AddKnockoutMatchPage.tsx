import { KnockoutMatchEditCard } from "components";
import { IKnockoutMatchReducer } from "components/EditCard/KnockoutMatchEditCard/KnockoutMatchReducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editKnockoutMatch,
  getKnockoutMatch,
  getTeamsFromRound,
  removeKnockoutMatch,
  saveKnockoutMatch,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddKnockoutMatchPage {
  roundName: string;
  id: string;
}

export const AddKnockoutMatchPage = ({
  roundName,
  id,
}: IAddKnockoutMatchPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (id !== null) dispatch(getKnockoutMatch(id));
    if (roundName !== null) dispatch(getTeamsFromRound(roundName));
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const teamNames = teams.teams
    .filter(team => team.roundName === roundName)
    .map(team => team.name);

  const knockoutMatches = useSelector(
    (state: IRootState) => state.knockoutMatches
  );
  const knockoutMatch =
    id !== null
      ? knockoutMatches.knockoutMatches.find(match => match.id === parseInt(id))
      : {
          date: "",
          homeTeam: "",
          awayTeam: "",
          homeGoals: "",
          awayGoals: "",
          homePenalties: "",
          awayPenalties: "",
        };

  const onSave = async (knockoutMatch: IKnockoutMatchReducer) => {
    const { data } = id
      ? await dispatch(editKnockoutMatch(id, knockoutMatch, roundName))
      : await dispatch(saveKnockoutMatch(knockoutMatch, roundName));

    if (!data?.error) {
      router.push("/admin/teams");
    }
  };

  const onDelete = () => {
    dispatch(removeKnockoutMatch(id)).then(({ data }) => {
      if (!data?.error) {
        router.push("/admin/players");
      }
    });
  };

  return (
    <Page
      title="Add Team"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        {knockoutMatch && teamNames.length ? (
          <KnockoutMatchEditCard
            teamNames={teamNames}
            knockoutMatch={{
              date: knockoutMatch.date,
              homeTeam: knockoutMatch.homeTeam,
              awayTeam: knockoutMatch.awayTeam,
              homeGoals: knockoutMatch.homeGoals?.toString(),
              awayGoals: knockoutMatch.awayGoals?.toString(),
              homePenalties: knockoutMatch.homePenalties?.toString(),
              awayPenalties: knockoutMatch.awayPenalties?.toString(),
            }}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!id}
          />
        ) : null}
      </AddPageContainer>
    </Page>
  );
};
