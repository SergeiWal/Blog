import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTagsAction, deleteTagAction, getTagsAction } from "../actions";
import AddTabsForm from "../components/addTagsForm";
import TagsList from "../components/tagsList";
import { Tag } from "../types";

export default function TabsInfoContainer() {
  const [value, setValue] = useState("");
  const [isValidate, setValidate] = useState(true);
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getTagsAction());
  }, [dispatch]);

  const clearForm = () => {
    setValue("");
  };

  const addTagHandler = () => {
    if (value.length > 0) {
      dispatch(addTagsAction(value));
      setValidate(true);
      clearForm();
    } else {
      setValidate(false);
    }
  };

  const deleteHandler = (tag: Tag) => {
    const index = tags.indexOf(tag);
    tags.splice(index, 1);
    dispatch(deleteTagAction(tag._id));
  };

  return (
    <div>
      <AddTabsForm
        value={value}
        isValidate={isValidate}
        setValue={setValue}
        clickHandler={addTagHandler}
      />
      <TagsList items={tags} deleteHandler={deleteHandler} />
    </div>
  );
}
