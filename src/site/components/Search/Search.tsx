import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchOuterContainer,
} from "./Search.styled";
import icon from "../../assets/search.svg";
import { useFocus } from "../../lib/useFocus";
import ICVE from "../../../api/models/cve/type";

interface ISearchProps {
  setSearchResults: (searchResults: ICVE[]) => void;
}

const Search = ({ setSearchResults }: ISearchProps) => {
  const [inputRef, setInputFocus] = useFocus();
  const [searchString, setSearchString] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const onSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchString.trim().length) {
      const response = await fetch(`/api/cve/${searchString}`, {
        method: "GET",
      });

      const responseJSON: ICVE[] = await response.json();

      if (response.ok) {
        setSearchResults(responseJSON);
      }

      setSearchHistory([...searchHistory, searchString]);
      setSearchString("");
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <SearchOuterContainer>
      <SearchContainer focused={isFocused} onClick={setInputFocus}>
        <SearchIcon src={icon} />
        <form onSubmit={onSearch}>
          <SearchInput
            ref={inputRef}
            value={searchString}
            onChange={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </form>
      </SearchContainer>
    </SearchOuterContainer>
  );
};

export default Search;
