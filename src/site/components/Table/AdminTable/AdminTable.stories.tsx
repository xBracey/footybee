import React from "react";
import { AdminTable } from "./AdminTable";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/AdminTable", module);

const headers = [
  {
    Header: "Test 1",
    accessor: "t1",
  },
  {
    Header: "Test 2",
    accessor: "t2",
  },
];

const data = [
  {
    t1: "Test Data 1",
    t2: "Test Data 2",
    id: 1,
  },
  {
    t1: "Test Data 5",
    t2: "Test Data 6",
    id: 2,
  },
  {
    t1: "Test Data 8",
    t2: "Test Data 9",
    id: 3,
  },
  {
    t1: "Test Data 3",
    t2: "Test Data 4",
    id: 4,
  },
];

story.add("AdminTable Component", () => (
  <AdminTable headers={headers} data={data} url={"test"} primaryKey="id" />
));
