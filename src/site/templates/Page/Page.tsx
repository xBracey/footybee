import React, { ReactNode } from "react";
import { Footer, Head, Header, Loading } from "components";
import { PageOuterContainer, PageInnerContainer } from "./Page.styled";
import { aboutHeaderData, adminHeaderData, footerData, headerData } from "data";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { useLoggedIn } from "lib";
import { colours } from "theme";
import { Message } from "../Message";
import { knockoutStart } from "src/site/lib/predictionLock";

interface IPage {
  children: ReactNode;
  title: string;
  isLoggedIn: boolean;
  backgroundColour?: string;
  loading?: boolean;
  aboutPages?: boolean;
  adminPages?: boolean;
  usePadding?: boolean;
}

export const Page = ({
  children,
  title,
  isLoggedIn,
  backgroundColour = colours.white,
  loading,
  aboutPages,
  adminPages,
  usePadding = true,
}: IPage) => {
  const auth = useSelector((state: IRootState) => state.auth);
  const user = useSelector((state: IRootState) => state.user);

  if (isLoggedIn) useLoggedIn();

  const childrenComponent = loading ? <Loading /> : children;

  const footerComponent = auth.token ? <Footer {...footerData} /> : null;

  let menu = headerData(
    user.admin,
    user.username,
    knockoutStart(user.username)
  );

  if (aboutPages) {
    menu = aboutHeaderData;
  } else if (adminPages) {
    menu = adminHeaderData(knockoutStart(user.username));
  }

  return isLoggedIn && !auth.token ? (
    <Loading />
  ) : (
    <div>
      <Header menu={menu} />
      <Head title={`FootyBee - ${title}`} />
      <Message />
      <PageOuterContainer backgroundColour={backgroundColour}>
        <PageInnerContainer usePadding={usePadding} isLoggedIn={isLoggedIn}>
          {childrenComponent}
        </PageInnerContainer>
      </PageOuterContainer>
      {footerComponent}
    </div>
  );
};
