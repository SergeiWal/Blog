import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { Tag } from "../../dashboard/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addArticleAction } from "../actions";
import CreateArticle from "../components/createArticle";

export type NewArticle = {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: Date;
  updateDate: Date;
  author: string;
  tags: Tag[];
};

const formValidation = (
  title: string,
  text: string,
  img: string,
  tags: Tag[],
  subtitle: string
) => {
  return (
    title.length > 0 &&
    text.length > 0 &&
    img.length > 0 &&
    subtitle.length > 0 &&
    tags.length > 0
  );
};

const getSelectedTagsFromStrArr = (strArr: string[], tags: Tag[]): Tag[] => {
  return tags.filter((tag) => strArr.includes(tag.name));
};

export default function CreateArticleContainer() {
  const [isValidate, setValidate] = useState(true);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { user, tags } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const resetFields = () => {
    setTitle("");
    setSubTitle("");
    setText("");
    setImg("");
    setSelectedTags([]);
  };

  const clickPubliahHandler = () => {
    if (formValidation(title, text, img, tags, subTitle)) {
      setValidate(true);
      const date: Date = new Date();
      const newTags: Tag[] = getSelectedTagsFromStrArr(selectedTags, tags);
      const article: NewArticle = {
        author: user._id,
        title: title,
        subtitle: subTitle,
        text: text,
        img: img,
        date: date,
        updateDate: date,
        tags: newTags,
      };
      dispatch(addArticleAction(article));
    } else {
      setValidate(false);
    }
    resetFields();
  };

  const onChangeHandler = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <CreateArticle
      isValidate={isValidate}
      title={title}
      subTitle={subTitle}
      text={text}
      img={img}
      tags={tags}
      selectedTags={selectedTags}
      setImg={setImg}
      setText={setText}
      setTitle={setTitle}
      setSubTitle={setSubTitle}
      clickPublishHandler={clickPubliahHandler}
      onChangeHandler={onChangeHandler}
    />
  );
}
