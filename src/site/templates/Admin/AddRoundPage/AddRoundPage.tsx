import { AdminTable, Button, RoundEditCard } from "components";
import { IRoundReducer } from "components/EditCard/RoundEditCard/RoundReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRound, saveRound } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getMatchesFromRound } from "src/site/redux/actions/knockoutMatches";
import { Page } from "templates";
import { colours } from "theme";
import { AddButtonContainer, AddPageContainer } from "../styles";
import { RoundPageContainer } from "./AddRoundPage.styled";

interface IAddRoundPage {
  name: string;
}

export const AddRoundPage = ({ name }: IAddRoundPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const knockoutMatches = useSelector(
    (state: IRootState) => state.knockoutMatches
  );

  const knockoutMatchesArray = knockoutMatches.knockoutMatches
    .filter(match => match.roundName === name)
    .map(knockoutMatch => ({
      ...knockoutMatch,
      score: `${knockoutMatch.homeGoals ?? 0}-${knockoutMatch.awayGoals ?? 0}`,
    }));

  useEffect(() => {
    dispatch(getMatchesFromRound(name));
  }, []);

  const onSave = async (round: IRoundReducer) => {
    const { data } = dispatch(saveRound(round));

    if (!data?.error) {
      router.push("/admin/rounds");
    }
  };

  const onDelete = () => {
    dispatch(removeRound(name)).then(({ data }) => {
      if (!data?.error) {
        router.push("/admin/rounds");
      }
    });
  };

  const knockoutMatchComponent = name ? (
    <>
      <AdminTable
        data={knockoutMatchesArray}
        headers={[
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Home Team",
            accessor: "homeTeam",
          },
          {
            Header: "Away Team",
            accessor: "awayTeam",
          },
          {
            Header: "Score",
            accessor: "score",
          },
        ]}
        url={`/admin/rounds/${name}`}
        primaryKey="id"
      />
      <AddButtonContainer>
        <Link href={`/admin/rounds/${name}/add`}>
          <Button
            text="Add Round Match"
            onClick={() => {}}
            buttonType={"blue"}
          />
        </Link>
      </AddButtonContainer>
    </>
  ) : null;

  return (
    <Page
      title="Add Round"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        <RoundPageContainer>
          <RoundEditCard
            round={{ name }}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!name}
          />
          {knockoutMatchComponent}
        </RoundPageContainer>
      </AddPageContainer>
    </Page>
  );
};
