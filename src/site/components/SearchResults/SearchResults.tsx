import React from "react";
import { SearchResultsContainer, ZeroState } from "./SearchResults.styled";
import ICVE, { Severity } from "../../../api/models/cve/type";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { sortBySeverity } from "../../lib/sort";

const searchColumnDefs = [
  { headerName: "ID", field: "id" },
  {
    headerName: "Severity",
    field: "severity",
    comparator: sortBySeverity,
  },
  { headerName: "Description", field: "description", flex: 2 },
  { headerName: "Published Date", field: "publishedDate" },
];

interface IMainProps {
  searchResults: ICVE[];
}

const SearchResults = ({ searchResults }: IMainProps) => {
  if (!searchResults.length) {
    return (
      <SearchResultsContainer>
        <ZeroState>No search results found</ZeroState>
      </SearchResultsContainer>
    );
  }

  return (
    <SearchResultsContainer>
      <div
        className="ag-theme-alpine"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <AgGridReact
          columnDefs={searchColumnDefs}
          rowData={searchResults}
          gridOptions={{
            defaultColDef: {
              sortable: true,
              flex: 1,
            },
          }}
        />
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
