import {
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const AddArticleContainer = styled(Container)(() => ({
  marginTop: "100px",
  marginBottom: "60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "20%",
  width: 950,
  backgroundColor: "white",
  borderRadius: 20,
  padding: "20px 40px 30px",

  "& form": {
    textAlign: "center",
  },
}));

export const AddArticleInput = styled(TextField)(() => ({
  marginBottom: "10px",
  width: "880px",
  fontSize: "18px",
  padding: "10px 0",
  borderRadius: 5,
}));

export const AddArticleTextArea = styled("textarea")(() => ({
  background: "transparent",
  width: " 860px",
  height: "400px",
  fontSize: "18px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  resize: "none",
  marginBottom: "10px",
  outlineColor: "#51ACAE",
}));

export const CreateArticleBtn = styled(Button)(() => ({
  backgroundColor: "#51ACAE",
  color: "white",
  padding: "7px 40px",
  width: "200px",
  marginTop: "20px",

  "&: hover": {
    backgroundColor: "#51ACAE",
    color: "white",
    opacity: "0.7",
  },
}));

export const CreateArticleHeader = styled(Typography)(() => ({
  color: "#5F626D",
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 15,
}));
