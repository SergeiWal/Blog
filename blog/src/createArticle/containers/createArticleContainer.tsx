import { useState } from "react";
import { ArticleComments } from "../../article/types/articleTypes";
import { User } from "../../authorization/types/userTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addArticleAction } from "../actions";
import CreateArticle from "../components/createArticle";

export type NewArticle = {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: string;
  updatedate: string;
  name: string;
  tags: Array<string>;
  likes: Array<string>;
  comments: ArticleComments;
};

const formValidation = (
  title: string,
  text: string,
  img: string,
  tags: string,
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

const convertTagsInputToArray = (inputStr: string) => {
  return inputStr
    .split(",")
    .map((item) => "#" + item.trim().toLowerCase().replace(" ", "_"));
};

export default function CreateArticleContainer() {
  const [isValidate, setValidate] = useState(true);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [tags, setTags] = useState("");

  const user: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const resetFields = () => {
    setTitle("");
    setSubTitle("");
    setText("");
    setImg("");
    setTags("");
  };

  const clickPubliahHandler = () => {
    if (formValidation(title, text, img, tags, subTitle)) {
      setValidate(true);
      const date: Date = new Date();
      const article: NewArticle = {
        name: user.name,
        title: title,
        subtitle: subTitle,
        text: text,
        img: img,
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        updatedate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        tags: convertTagsInputToArray(tags),
        likes: [],
        comments: [],
      };
      dispatch(addArticleAction(article));
    } else {
      setValidate(false);
    }
    resetFields();
  };

  return (
    <CreateArticle
      isValidate={isValidate}
      title={title}
      subTitle={subTitle}
      text={text}
      img={img}
      tags={tags}
      setImg={setImg}
      setText={setText}
      setTitle={setTitle}
      setSubTitle={setSubTitle}
      clickPublishHandler={clickPubliahHandler}
      setTags={setTags}
    />
  );
}
