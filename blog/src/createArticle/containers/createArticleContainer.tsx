import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Tag } from "../../dashboard/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addArticleAction } from "../actions";
import CreateArticle from "../components/createArticle";
import * as Yup from "yup";
import { WSClientMessage } from "../../interfaces";
import { WSMessageType } from "../../constants";

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
  img: Yup.string()
    .matches(/a(.*)jpeg|png|jpg/, "Link to img isn't valid")
    .required("Required"),
  selectedTags: Yup.array().min(1, "Required").required("Required"),
});

const getSelectedTagsFromStrArr = (strArr: string[], tags: Tag[]): Tag[] => {
  return tags.filter((tag) => strArr.includes(tag.name));
};

export default function CreateArticleContainer() {
  const { user, tags, token, requests, wsClient, articles, isFetching } =
    useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [isSubmit, setIsSubmit] = useState(false);
  const [server_error, setError] = useState("");
  const [message, setMessage] = useState("");

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
      setIsSubmit(true);
      setMessage(`${values.title}-${values.subTitle}`);
      dispatch(addArticleAction({ article, token }));
      resetForm();
    },
  });

  useEffect(() => {
    const key = addArticleAction.type.replace("_REQUEST", "");
    if (requests[key] !== undefined && !requests[key]) {
      setError("Add article failed");
    } else if (isSubmit && requests[key]) {
      const wsMessage: WSClientMessage = { message, type: WSMessageType.ADD };
      wsClient.socket.send(JSON.stringify(wsMessage));
      setError("");
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
