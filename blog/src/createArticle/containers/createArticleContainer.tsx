import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Tag } from "../../dashboard/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addArticleAction } from "../actions";
import CreateArticle from "../components/createArticle";
import * as Yup from "yup";

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

const CreateArticleSchema = Yup.object({
  title: Yup.string().required("Required"),
  subTitle: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
  img: Yup.string().required("Required"),
  selectedTags: Yup.array().min(1, "Required").required("Required"),
});

const getSelectedTagsFromStrArr = (strArr: string[], tags: Tag[]): Tag[] => {
  return tags.filter((tag) => strArr.includes(tag.name));
};

export default function CreateArticleContainer() {
  const { user, tags, token, requests } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [server_error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      text: "",
      img: "",
      selectedTags: [],
    },
    validationSchema: CreateArticleSchema,
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

  useEffect(() => {
    const key = addArticleAction.type.replace("_REQUEST", "");
    if (requests[key] !== undefined && !requests[key]) {
      setError("Add article failed");
    } else {
      setError("");
    }
  }, [requests]);

  return (
    <CreateArticle
      server_error={server_error}
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
