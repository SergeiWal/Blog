import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { FormikErrors } from "formik";
import { Tag } from "../../dashboard/types";

export type CreateArticleProps = {
  title: string;
  subTitle: string;
  text: string;
  img: string;
  tags: Tag[];
  selectedTags: string[];
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
    <form onSubmit={handleSubmit}>
      <div className="createArticleForm">
        <input
          type="text"
          className="articleTitleInput"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        {errors.title ? (
          <div className="ErrorMessage">{errors.title}</div>
        ) : null}
        <input
          type="text"
          className="articleTitleInput"
          placeholder="Subtitle"
          name="subTitle"
          onChange={handleChange}
          value={subTitle}
        />
        {errors.subTitle ? (
          <div className="ErrorMessage">{errors.subTitle}</div>
        ) : null}
        <input
          type="text"
          name="img"
          className="articleImgSrcInput"
          placeholder="Link to image"
          onChange={handleChange}
          value={img}
        />
        {errors.img ? <div className="ErrorMessage">{errors.img}</div> : null}
        <textarea
          className="articleTextInput"
          name="text"
          placeholder="Text"
          onChange={handleChange}
          value={text}
        />
        {errors.text ? <div className="ErrorMessage">{errors.text}</div> : null}
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="select_tags">Tags</InputLabel>
            <Select
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
            </Select>
          </FormControl>
          {errors.selectedTags ? (
            <div className="ErrorMessage">{errors.selectedTags}</div>
          ) : null}
          {errors.add_article ? (
            <div className="ErrorMessage">{errors.add_article}</div>
          ) : null}
        </div>
        <div className="articlePublishButton">
          <button type="submit">Publish</button>
        </div>
      </div>
    </form>
  );
}
