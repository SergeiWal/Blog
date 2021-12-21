import { useFormik } from "formik";
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

export type CreateArticleErrors = {
  title?: string;
  subTitle?: string;
  img?: string;
  text?: string;
  selectedTags?: string;
};

const validate = (values) => {
  const errors: CreateArticleErrors = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.subTitle) {
    errors.subTitle = "Required";
  }

  if (!values.text) {
    errors.subTitle = "Required";
  }

  if (!values.img) {
    errors.img = "Required";
  }

  if (!values.selectedTags || values.selectedTags.length < 1) {
    errors.selectedTags = "Required";
  }

  return errors;
};

const getSelectedTagsFromStrArr = (strArr: string[], tags: Tag[]): Tag[] => {
  return tags.filter((tag) => strArr.includes(tag.name));
};

export default function CreateArticleContainer() {
  const { user, tags, token } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      text: "",
      img: "",
      selectedTags: [],
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const date: Date = new Date();
      const newTags: Tag[] = getSelectedTagsFromStrArr(
        values.selectedTags,
        tags
      );
      const article: NewArticle = {
        author: user._id,
        title: values.title,
        subtitle: values.subTitle,
        text: values.text,
        img: values.img,
        date: date,
        updateDate: date,
        tags: newTags,
      };
      dispatch(addArticleAction({ article, token }));
      resetForm();
    },
  });

  return (
    <CreateArticle
      errors={formik.errors}
      title={formik.values.title}
      subTitle={formik.values.subTitle}
      text={formik.values.text}
      img={formik.values.img}
      tags={tags}
      selectedTags={formik.values.selectedTags}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
}
