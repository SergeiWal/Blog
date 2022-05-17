import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { CommentFormProps } from "../types/articlePropsTypes";
import { WriteCommentBtn, WriteCommentField } from "./styled";

export default function CommentForm({
  open,
  closeHandler,
  changeCommentHandler,
  saveCommentHandler,
}: CommentFormProps) {
  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle style={{ color: "#5F626D", fontWeight: "bold" }}>
        New comment
      </DialogTitle>
      <DialogContent>
        <WriteCommentField
          color="info"
          autoFocus
          id="comment"
          placeholder="Write anythinq ..."
          onChange={(e) => changeCommentHandler(e.target.value)}
        />
      </DialogContent>
      <DialogActions style={{ margin: "0 15px 10px" }}>
        <WriteCommentBtn onClick={closeHandler}>Cancel</WriteCommentBtn>
        <WriteCommentBtn onClick={saveCommentHandler}>Save</WriteCommentBtn>
      </DialogActions>
    </Dialog>
  );
}
