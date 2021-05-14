import { ResultsTable } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getGroupMatches } from "src/site/redux/actions/groupMatches";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { Page } from "templates";
import { ResultsPageContainer } from "./ResultsPage.styled";

export const ResultsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);

  useEffect(() => {
    dispatch(getGroupMatches());
  }, []);

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

  const groupMatchesComponent = Object.entries(
    groups
  ).map(([key, value], index) => (
    <ResultsTable
      key={key}
      groupMatches={value}
      title={`Group ${key}`}
      inverted={index % 2 === 0}
    />
  ));

  return (
    <ResultsPageContainer>
      <Page title="Results" isLoggedIn={true}>
        {groupMatchesComponent}
      </Page>
    </ResultsPageContainer>
  );
};
