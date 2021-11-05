import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";

export type CommetFormProps = {
  open: boolean;
  closeHandler: () => void;
  saveComment: (comment: string) => void;
};

export default function CommentForm({
  open,
  closeHandler,
  saveComment,
}: CommetFormProps) {
  const [comment, setComment] = useState("");

  const changeCommentHandler = (text: string) => {
    setComment(text);
  };
  const saveCommentHandler = () => {
    saveComment(comment);
    closeHandler();
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>New comment</DialogTitle>
      <DialogContent>
        <textarea
          className="commentInputField"
          color="info"
          autoFocus
          id="comment"
          placeholder="Write anythinq ..."
          onChange={(e) => changeCommentHandler(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="inherit">
          Cancel
        </Button>
        <Button onClick={saveCommentHandler} color="inherit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
