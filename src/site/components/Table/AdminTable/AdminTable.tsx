import React, { useMemo } from "react";
import {
  AdminTableContainer,
  AdminHead,
  AdminBody,
  AdminRow,
  AdminHeader,
  AdminCell,
  AdminHeaderRow,
} from "./AdminTable.styled";
import { useTable, useSortBy } from "react-table";
import { icons } from "assets";
import { Button } from "components/Button";
import { useRouter } from "next/router";

interface IAdminTable {
  headers: {
    Header: string;
    accessor: string;
  }[];
  data: any[];
  url: string;
  primaryKey: string;
}

export const AdminTable = ({ headers, data, url, primaryKey }: IAdminTable) => {
  const router = useRouter();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(() => headers, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData }, useSortBy);

  return (
    <AdminTableContainer {...getTableProps()}>
      <AdminHead>
        {headerGroups.map(headerGroup => (
          <AdminHeaderRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <AdminHeader>
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <icons.sortDown />
                    ) : (
                      <icons.sortUp />
                    )
                  ) : (
                    <icons.sort />
                  )}
                </AdminHeader>
              </th>
            ))}
            <th>
              <AdminHeader>Edit</AdminHeader>
            </th>
          </AdminHeaderRow>
        ))}
      </AdminHead>
      <AdminBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          const id =
            row.cells && row.cells.length && !!row.cells.find
              ? row.cells.find(cell => cell.column.id === primaryKey).value
              : null;

          return (
            <AdminRow {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td>
                  <AdminCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </AdminCell>
                </td>
              ))}
              <td>
                <AdminCell>
                  <Button
                    buttonType="blue"
                    text="Edit"
                    onClick={() => router.push(`${url}/${id}`)}
                  />
                </AdminCell>
              </td>
            </AdminRow>
          );
        })}
      </AdminBody>
    </AdminTableContainer>
  );
};
