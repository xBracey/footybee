import React, { useState } from "react";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import {
  ResultsTableContainer,
  ResultsContainer,
  TableContainer,
  ResultsTableOuterContainer,
  ResultTableTitle,
} from "./ResultsTable.styled";
import { LeagueTable } from "../Table/LeagueTable";
import { Result } from "components/Result/Result";

interface IResultsTable {
  groupMatches: IGroupMatch[];
  inverted: boolean;
  title: string;
}

export const ResultsTable = ({
  groupMatches,
  inverted,
  title,
}: IResultsTable) => {
  const resultsComponent = groupMatches.map(match => <Result {...match} />);

  const [table, setTable] = useState([]);

  return (
    <ResultsTableOuterContainer inverted={inverted}>
      <ResultsTableContainer>
        <ResultTableTitle>{title}</ResultTableTitle>
        <ResultsContainer>{resultsComponent}</ResultsContainer>
        <TableContainer>
          <LeagueTable
            matches={groupMatches}
            isResults
            table={table}
            setTable={setTable}
          />
        </TableContainer>
      </ResultsTableContainer>
    </ResultsTableOuterContainer>
  );
};
