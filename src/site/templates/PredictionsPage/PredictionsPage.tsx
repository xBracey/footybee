import React, { useEffect } from "react";
import { PredictionsTable } from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroupMatchPredictions,
  saveGroupMatchPredictions,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getGroupMatches } from "src/site/redux/actions/groupMatches";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { Page } from "templates";
import { PredictionsPageContainer } from "./PredictionsPage.styled";

export const PredictionsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: IRootState) => state.user);
  const groupMatches = useSelector((state: IRootState) => state.groupMatches);
  const groupMatchPredictions = useSelector(
    (state: IRootState) => state.groupMatchPredictions
  );

  useEffect(() => {
    dispatch(getGroupMatches());
  }, []);

  useEffect(() => {
    if (user.username) dispatch(getGroupMatchPredictions());
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

  const onSave = predictions => {
    dispatch(saveGroupMatchPredictions(predictions));
  };

  const groupMatchesComponent = Object.entries(
    groups
  ).map(([key, value], index) => (
    <PredictionsTable
      key={key}
      groupMatches={value}
      originalPredictions={groupMatchPredictions.predictions}
      title={`Group ${key}`}
      inverted={index % 2 === 0}
      onSave={onSave}
    />
  ));

  return (
    <PredictionsPageContainer>
      <Page title="Results" isLoggedIn={true}>
        {groupMatchesComponent}
      </Page>
    </PredictionsPageContainer>
  );
};
