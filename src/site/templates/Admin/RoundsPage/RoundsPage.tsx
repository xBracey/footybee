import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRounds } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable, Button } from "components";
import { AddButtonContainer, PageContainer } from "../styles";
import { colours } from "theme";
import Link from "next/link";

export const RoundsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const rounds = useSelector((state: IRootState) => state.rounds);

  console.log(rounds);

  useEffect(() => {
    dispatch(getRounds());
  }, []);

  return (
    <Page
      title="Rounds"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <PageContainer>
        <AdminTable
          data={rounds.rounds}
          headers={[
            {
              Header: "Round Name",
              accessor: "name",
            },
          ]}
          url={"/admin/rounds"}
          primaryKey="name"
        />
        <AddButtonContainer>
          <Link href="/admin/rounds/add">
            <Button text="Add Round" onClick={() => {}} buttonType={"blue"} />
          </Link>
        </AddButtonContainer>
      </PageContainer>
    </Page>
  );
};
