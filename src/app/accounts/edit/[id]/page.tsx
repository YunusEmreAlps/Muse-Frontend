"use client";

import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export default function AccountEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({});

  const accountsData = queryResult?.data?.data;

  const { autocompleteProps: accountAutocompleteProps } = useAutocomplete({
    resource: "accounts",
    defaultValue: accountsData?.id,
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("number", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.number}
          helperText={(errors as any)?.number?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Number"}
          name="number"
        />
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          label={"Name"}
          name="name"
          rows={4}
        />
        <TextField
          {...register("balance", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.balance}
          helperText={(errors as any)?.balance?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label={"Balance"}
          name="balance"
        />
      </Box>
    </Edit>
  );
}
