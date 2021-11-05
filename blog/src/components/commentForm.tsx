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
      <DialogTitle>Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Comment"
          placeholder="Write anythinq ..."
          onChange={(e) => changeCommentHandler(e.target.value)}
          multiline
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Cancel</Button>
        <Button onClick={saveCommentHandler}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
