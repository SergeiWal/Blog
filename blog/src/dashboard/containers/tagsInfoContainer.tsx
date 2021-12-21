import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTagsAction, deleteTagAction, getTagsAction } from "../actions";
import AddTabsForm from "../components/addTagsForm";
import TagsList from "../components/tagsList";
import { Tag } from "../types";

type AddTagErrors = {
  value?: string;
};

const validate = (values) => {
  const errors: AddTagErrors = {};
  if (!values.value) {
    errors.value = "Required";
  } else if (values.value.length > 10 && values.value.length < 4) {
    errors.value = "Must be from 4 to 10 characters ";
  }

  return errors;
};

export default function TabsInfoContainer() {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getTagsAction());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: { value: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(addTagsAction(values.value));
      resetForm();
    },
  });

  const deleteHandler = (tag: Tag) => {
    const index = tags.indexOf(tag);
    tags.splice(index, 1);
    dispatch(deleteTagAction(tag._id));
  };

  return (
    <div>
      <AddTabsForm
        value={formik.values.value}
        errors={formik.errors}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
      />
      <TagsList items={tags} deleteHandler={deleteHandler} />
    </div>
  );
}
