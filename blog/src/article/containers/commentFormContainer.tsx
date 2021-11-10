import { useState } from "react";
import CommentForm from "../components/commentForm";
import { CommentFormContainerProps } from "../types/articlePropsTypes";

export default function CommentFormContainer({
  open,
  saveComment,
  closeHandler,
}: CommentFormContainerProps) {
  const [comment, setComment] = useState("");

  const changeCommentHandler = (text: string) => {
    setComment(text);
  };

  const closeFormHandler = () => {
    setComment("");
    closeHandler();
  };

  const saveCommentHandler = () => {
    saveComment(comment);
    closeFormHandler();
  };

  return (
    <CommentForm
      open={open}
      closeHandler={closeFormHandler}
      changeCommentHandler={changeCommentHandler}
      saveCommentHandler={saveCommentHandler}
    />
  );
}
