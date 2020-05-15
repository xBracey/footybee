import React, { useState, ChangeEvent, FormEvent } from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./Search.styled";
import icon from "../../assets/search.svg";
import { useFocus } from "../../lib/useFocus";

const Search = () => {
  const [inputRef, setInputFocus] = useFocus();
  const [searchString, setSearchString] = useState("");

  const onSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchString.trim().length) {
      const response = await fetch(`/api/cve/${searchString}`, {
        method: "GET",
      });

      const responseJSON = await response.json();

      console.log(responseJSON);
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <SearchContainer onClick={setInputFocus}>
      <SearchIcon src={icon} />
      <form onSubmit={onSearch}>
        <SearchInput
          ref={inputRef}
          value={searchString}
          onChange={onChangeText}
        />
      </form>
    </SearchContainer>
  );
};

export default Search;
