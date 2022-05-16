import {
  FilterListTitle as SearchTitle,
  SearchBtn,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
} from "./styled";

export default function SearchArticle() {
  return (
    <SearchContainer>
      <SearchTitle>Find</SearchTitle>
      <SearchInputContainer>
        <SearchInput placeholder="Write article title or subtitle" />
        <SearchBtn>Find</SearchBtn>
      </SearchInputContainer>
    </SearchContainer>
  );
}
