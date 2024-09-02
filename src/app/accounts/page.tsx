"use client";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { dataProvider } from "@providers/data-provider";
import { BaseRecord } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React, { useEffect, useState } from "react";

export default function AccountList() {
  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const [user, setUser] = useState({ id: "" });
  const [accountData, setAccountData] = useState<BaseRecord[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);

    if (storedUser.id) {
      dataProvider.getList({
        resource: `accounts/${storedUser.id}`,
      }).then(data => {
        setAccountData(data.data);
        setTotal(data.total);
      });
    }
  }, []);

  const columns = React.useMemo<GridColDef[]>(
      () => [
        {
          field: "id",
          headerName: "ID",
          type: "UUID",
          minWidth: 100,
        },
        {
          field: "accountName",
          flex: 1,
          headerName: "Account Name",
          type: "string",
          minWidth: 200,
        },
        {
          field: "accountNumber",
          flex: 1,
          headerName: "Account Number",
          type: "string",
          minWidth: 200,
        },
      
        {
          field: "updatedAt",
          flex: 1,
          headerName: "Updated at",
          minWidth: 250,
          renderCell: function render({ value }) {
            return <DateField value={value} />;
          },
        },
        {
          field: "createdAt",
          flex: 1,
          headerName: "Created at",
          minWidth: 250,
          renderCell: function render({ value }) {
            return <DateField value={value} />;
          },
        },
        {
          field: "actions",
          headerName: "Actions",
          sortable: false,
          renderCell: function render({ row }) {
            return (
              <>
                <EditButton hideText recordItemId={row.id} />
                <ShowButton hideText recordItemId={row.id} />
                <DeleteButton hideText recordItemId={row.id} />
              </>
            );
          },
          align: "center",
          headerAlign: "center",
          minWidth: 80,
        },
      ],
      []
    );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
}
