import React, { useState } from "react";
import { Header, Head, Main, Filters } from "../components";
import { Background, GlobalStyle, MainFilterContainer } from "../lib/constants";
import ICVE from "../../api/models/cve/type";

const IndexPage = () => {
  const [searchResults, setSearchResults]: [
    ICVE[],
    (searchResults: ICVE[]) => void
  ] = useState([]);

  const [filter, setFilter]: [any, (filter: boolean) => void] = useState(false);

  const [graphResults, setGraphResults]: [
    ICVE[],
    (searchResults: ICVE[]) => void
  ] = useState([]);

  return (
    <Background>
      <GlobalStyle />
      <Head title={"Dashboard"} />
      <Header
        setSearchResults={setSearchResults}
        setFilter={setFilter}
        filter={filter}
      />
      <MainFilterContainer>
        <Main
          searchResults={searchResults}
          graphResults={graphResults}
          filter={filter}
        />
        <Filters filter={filter} setGraphResults={setGraphResults} />
      </MainFilterContainer>
    </Background>
  );
};

export default IndexPage;
