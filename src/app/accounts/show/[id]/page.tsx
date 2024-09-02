"use client";

import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export default function AccountShow() {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: accountData, isLoading: accountIsLoading } = useOne({
    resource: "accounts",
    id: record?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {"Account Name"}
        </Typography>
        <TextField value={record?.accountName} />

        <Typography variant="body1" fontWeight="bold">
          {"Account Number"}
        </Typography>
        <MarkdownField value={record?.accountNumber} />
        <Typography variant="body1" fontWeight="bold">
          {"Updated at"}
        </Typography>
        <TextField value={record?.updatedAt} />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
}
