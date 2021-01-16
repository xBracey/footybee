import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Footer, Header, Loading } from "components";
import { PageOuterContainer, PageInnerContainer } from "./Page.styled";
import { footerData, headerData } from "data";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { useLoggedIn } from "lib";

interface IPage {
  children: ReactNode;
  title: string;
  isLoggedIn: boolean;
  loading?: boolean;
}

export const Page = ({ children, title, isLoggedIn, loading }: IPage) => {
  const auth = useSelector((state: IRootState) => state.auth);
  const user = useSelector((state: IRootState) => state.user);

  if (isLoggedIn) useLoggedIn();

  const childrenComponent = loading ? <Loading /> : children;

  return isLoggedIn && !auth.token ? (
    <Loading />
  ) : (
    <div>
      <Header menu={headerData(user.admin)} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <PageOuterContainer>
        <PageInnerContainer>{childrenComponent}</PageInnerContainer>
      </PageOuterContainer>
      <Footer {...footerData} />
    </div>
  );
};
