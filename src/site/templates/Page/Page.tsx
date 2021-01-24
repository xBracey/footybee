import React, { ReactNode } from "react";
import { Footer, Head, Header, Loading } from "components";
import { PageOuterContainer, PageInnerContainer } from "./Page.styled";
import { aboutHeaderData, footerData, headerData } from "data";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { useLoggedIn } from "lib";
import { colours } from "theme";
import { Message } from "../Message";

interface IPage {
  children: ReactNode;
  title: string;
  isLoggedIn: boolean;
  backgroundColour?: string;
  loading?: boolean;
  aboutPages?: boolean;
}

export const Page = ({
  children,
  title,
  isLoggedIn,
  backgroundColour = colours.white,
  loading,
  aboutPages,
}: IPage) => {
  const auth = useSelector((state: IRootState) => state.auth);
  const user = useSelector((state: IRootState) => state.user);

  if (isLoggedIn) useLoggedIn();

  const childrenComponent = loading ? <Loading /> : children;

  const footerComponent = auth.token ? <Footer {...footerData} /> : null;

  return isLoggedIn && !auth.token ? (
    <Loading />
  ) : (
    <div>
      <Header menu={aboutPages ? aboutHeaderData : headerData(user.admin)} />
      <Head title={`FootyBee - ${title}`} />
      <Message />
      <PageOuterContainer backgroundColour={backgroundColour}>
        <PageInnerContainer>{childrenComponent}</PageInnerContainer>
      </PageOuterContainer>
      {footerComponent}
    </div>
  );
};
