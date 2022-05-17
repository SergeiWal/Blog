import { useFormik } from "formik";
import { useAppDispatch } from "../../store/store";
import { clearFilterAction } from "../articleListActions";
import {
  FilterListTitle as SearchTitle,
  SearchBtn,
  SearchContainer,
  SearchInput,
  SearchInputForm,
} from "./styled";

export interface SearchArtileProps {
  setSearchValueHandler: (value: string) => void;
}

export default function SearchArticle({
  setSearchValueHandler,
}: SearchArtileProps) {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      value: "",
    },
    onSubmit: ({ value }, { resetForm }) => {
      setSearchValueHandler(value);
      resetForm();
      dispatch(clearFilterAction());
      setSearchValueHandler("");
    },
  });

  return (
    <SearchContainer>
      <SearchTitle>Find</SearchTitle>
      <SearchInputForm onSubmit={formik.handleSubmit}>
        <SearchInput
          name="value"
          placeholder="Write article title or subtitle"
          onChange={formik.handleChange}
          value={formik.values.value}
        />
        <SearchBtn type="submit">Find</SearchBtn>
      </SearchInputForm>
    </SearchContainer>
  );
}
