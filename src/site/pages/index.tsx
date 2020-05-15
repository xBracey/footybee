import React from "react";
import { Header, Head } from "../components";
import { Background, GlobalStyle } from "../lib/constants";

const IndexPage = () => {
  return (
    <Background>
      <GlobalStyle />
      <Head title={"Dashboard"} />
      <Header />
    </Background>
  );
};

export default IndexPage;
