import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Tag } from "../../dashboard/types";

const ERROR_MESSAGE: string = "Please, fill all members";

export type CreateArticleProps = {
  isValidate: boolean;
  title: string;
  subTitle: string;
  text: string;
  img: string;
  tags: Tag[];
  selectedTags: string[];
  setTitle: (title: string) => void;
  setSubTitle: (subtitle: string) => void;
  setText: (text: string) => void;
  setImg: (img: string) => void;
  clickPublishHandler: () => void;
  onChangeHandler: (event: SelectChangeEvent<string[]>) => void;
};

export default function CreateArticle({
  isValidate,
  title,
  subTitle,
  text,
  img,
  tags,
  selectedTags,
  setImg,
  setText,
  setTitle,
  setSubTitle,
  clickPublishHandler,
  onChangeHandler,
}: CreateArticleProps) {
  return (
    <div className="createArticleForm">
      <input
        type="text"
        className="articleTitleInput"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        className="articleTitleInput"
        placeholder="Subtitle"
        onChange={(e) => setSubTitle(e.target.value)}
        value={subTitle}
      />
      <input
        type="text"
        className="articleImgSrcInput"
        placeholder="Link to image"
        onChange={(e) => setImg(e.target.value)}
        value={img}
      />
      <textarea
        className="articleTextInput"
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select_tags">Tags</InputLabel>
          <Select
            labelId="select_tags"
            id="select"
            multiple
            value={selectedTags}
            input={<OutlinedInput label="Name" />}
            onChange={onChangeHandler}
          >
            {tags.map((tag) => (
              <MenuItem key={tag._id} value={tag.name}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="infoMessage">{isValidate ? "" : ERROR_MESSAGE}</div>
      <div className="articlePublishButton">
        <button type="button" onClick={clickPublishHandler}>
          Publish
        </button>
      </div>
    </div>
  );
}
