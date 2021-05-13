import { GroupMatchEditCard } from "components";
import { IGroupMatchReducer } from "components/EditCard/GroupMatchEditCard/GroupMatchReducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editGroupMatch,
  getGroupMatch,
  getTeamsFromGroup,
  removeGroupMatch,
  saveGroupMatch,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddGroupMatchPage {
  groupLetter: string;
  id: string;
}

export const AddGroupMatchPage = ({ groupLetter, id }: IAddGroupMatchPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (id !== null) dispatch(getGroupMatch(id));
    if (groupLetter !== null) dispatch(getTeamsFromGroup(groupLetter));
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const teamNames = teams.teams
    .filter(team => team.groupLetter === groupLetter)
    .map(team => team.name);

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);
  const groupMatch =
    id !== null
      ? groupMatches.groupMatches.find(match => match.id === parseInt(id))
      : {
          date: "",
          homeTeam: "",
          awayTeam: "",
          homeGoals: "",
          awayGoals: "",
        };

  const onSave = async (groupMatch: IGroupMatchReducer) => {
    const { data } = id
      ? await dispatch(editGroupMatch(id, groupMatch, groupLetter))
      : await dispatch(saveGroupMatch(groupMatch, groupLetter));

    if (!data?.error) {
      router.push("/admin/teams");
    }
  };

  const onDelete = () => {
    dispatch(removeGroupMatch(id)).then(({ data }) => {
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
        {groupMatch && teamNames.length ? (
          <GroupMatchEditCard
            teamNames={teamNames}
            groupMatch={{
              date: groupMatch.date,
              homeTeam: groupMatch.homeTeam,
              awayTeam: groupMatch.awayTeam,
              homeGoals: groupMatch.homeGoals?.toString(),
              awayGoals: groupMatch.awayGoals?.toString(),
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
