import { Box, Typography } from "@mui/material";
import { FormikErrors } from "formik";
import { ErrorMessage } from "../../authorization/styled";
import { TagInput, TagSubmitBtn } from "./styled";

export type AddTagsFormProps = {
  value: string;
  errors: FormikErrors<any>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

export default function AddTagsForm({
  value,
  errors,
  handleSubmit,
  handleChange,
}: AddTagsFormProps) {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography
          style={{ color: "#5F626D", fontWeight: "bold", marginBottom: "5px" }}
        >
          Add tag:
        </Typography>
        <TagInput
          type="text"
          value={value}
          name="value"
          onChange={handleChange}
        />
        <TagSubmitBtn type="submit">ADD</TagSubmitBtn>
      </form>
      {errors.value && (
        <ErrorMessage style={{ marginTop: 2 }}>{errors.value}</ErrorMessage>
      )}
      {errors.add_tag && (
        <ErrorMessage style={{ marginTop: 2 }}>{errors.add_tag}</ErrorMessage>
      )}
    </Box>
  );
}
