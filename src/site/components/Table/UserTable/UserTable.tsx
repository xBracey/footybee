import React from "react";
import {
  LeagueTableCell,
  LeagueTableContainer,
  LeagueTableHeader,
  LeagueTableHeaderCell,
  LeagueTableRow,
} from "../LeagueTable/LeagueTable.styled";

interface IUser {
  displayName: string;
  points: number;
  isUser?: boolean;
}

interface IUserTable {
  users: IUser[];
}

export const UserTable = ({ users }: IUserTable) => {
  const rowsComponent = users
    .sort((a, b) => b.points - a.points)
    .map((user, index) => (
      <LeagueTableRow key={index} isHighlighted={user.isUser}>
        <LeagueTableCell width={80} paddingRight={40}>
          {index + 1}
        </LeagueTableCell>
        <LeagueTableCell isName={true} notCentered>
          {user.displayName}
        </LeagueTableCell>
        <LeagueTableCell width={100} paddingLeft={40}>
          {user.points}
        </LeagueTableCell>
      </LeagueTableRow>
    ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell width={80} paddingRight={40}>
          Rank
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell isName={true} notCentered>
          Name
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell width={100} paddingLeft={40}>
          Points
        </LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
