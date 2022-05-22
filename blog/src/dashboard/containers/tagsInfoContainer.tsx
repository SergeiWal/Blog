import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTagsAction, deleteTagAction, getTagsAction } from "../actions";
import AddTabsForm from "../components/addTagsForm";
import { DashboardTagContainer } from "../components/styled";
import TagsList from "../components/tagsList";
import { Tag } from "../types";

type AddTagErrors = {
  value?: string;
  add_tag?: string;
};

const validate = (values) => {
  const errors: AddTagErrors = {};
  const regex = /^[A-Za-z]+$/;
  if (!values.value) {
    errors.value = "Required";
  } else if (values.value.length > 10 && values.value.length < 4) {
    errors.value = "Must be from 4 to 10 characters ";
  } else if (!regex.exec(values.value)) {
    errors.value = "Tag name should conatain only latin latters";
  }

  return errors;
};

export default function TabsInfoContainer() {
  const dispatch = useAppDispatch();
  const { tags, token, requests } = useAppSelector((state) => state);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getTagsAction({ token }));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: { value: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(addTagsAction({ tag: values.value, token }));
      setSubmitted(true);
      resetForm();
    },
  });

  useEffect(() => {
    const key = addTagsAction.type.replace("_REQUEST", "");
    if (!requests[key] && isSubmitted) {
      formik.errors.add_tag = "Add tag failed";
    }
  }, [requests]);

  const deleteHandler = (tag: Tag) => {
    const index = tags.indexOf(tag);
    tags.splice(index, 1);
    dispatch(deleteTagAction({ id: tag._id, token }));
  };

  return (
    <DashboardTagContainer>
      <Typography
        style={{
          color: "#5F626D",
          fontWeight: "bold",
          marginBottom: "5px",
          fontSize: 20,
        }}
      >
        Tags management
      </Typography>
      <AddTabsForm
        value={formik.values.value}
        errors={formik.errors}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
      />
      <TagsList items={tags} deleteHandler={deleteHandler} />
    </DashboardTagContainer>
  );
}
