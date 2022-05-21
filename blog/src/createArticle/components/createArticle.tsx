import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { FormikErrors } from "formik";
import { Tag } from "../../dashboard/types";
import {
  AddArticleContainer,
  AddArticleInput,
  AddArticleSelect,
  AddArticleTextArea,
  CreateArticleBtn,
  CreateArticleHeader,
} from "./styled";

export type CreateArticleProps = {
  title: string;
  subTitle: string;
  text: string;
  img: string;
  tags: Tag[];
  selectedTags: string[];
  server_error: string;
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

export default function CreateArticle({
  server_error,
  errors,
  title,
  subTitle,
  text,
  img,
  tags,
  selectedTags,
  handleSubmit,
  handleChange,
}: CreateArticleProps) {
  return (
    <AddArticleContainer>
      <CreateArticleHeader>Create post</CreateArticleHeader>
      <form onSubmit={handleSubmit}>
        <AddArticleInput
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        {errors.title && <div className="ErrorMessage">{errors.title}</div>}
        <AddArticleInput
          type="text"
          placeholder="Subtitle"
          name="subTitle"
          onChange={handleChange}
          value={subTitle}
        />
        {errors.subTitle && (
          <div className="ErrorMessage">{errors.subTitle}</div>
        )}
        <AddArticleInput
          type="text"
          name="img"
          placeholder="Link to image"
          onChange={handleChange}
          value={img}
        />
        {errors.img && <div className="ErrorMessage">{errors.img}</div>}
        <AddArticleTextArea
          name="text"
          placeholder="Text"
          onChange={handleChange}
          value={text}
        />
        {errors.text && <div className="ErrorMessage">{errors.text}</div>}
        <Container>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="select_tags">Tags</InputLabel>
            <AddArticleSelect
              labelId="select_tags"
              id="select"
              name="selectedTags"
              multiple
              value={selectedTags}
              input={<OutlinedInput label="Name" />}
              onChange={handleChange}
            >
              {tags.map((tag) => (
                <MenuItem key={tag._id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))}
            </AddArticleSelect>
          </FormControl>
          {errors.selectedTags && (
            <div className="ErrorMessage">{errors.selectedTags}</div>
          )}
          {server_error && <div className="ErrorMessage">{server_error}</div>}
        </Container>
        <CreateArticleBtn type="submit">Publish</CreateArticleBtn>
      </form>
    </AddArticleContainer>
  );
}
