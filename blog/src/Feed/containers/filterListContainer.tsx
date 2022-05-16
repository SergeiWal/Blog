import { useEffect } from "react";
import { getTagsAction } from "../../dashboard/actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import FilterList from "../components/filterList";
import SearchArticle from "../components/searchArticle";
import { UserDaschboardContainer } from "../styled";

export default function FilterListContainer() {
  const { tags, token } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTagsAction({ token }));
  }, [dispatch]);

  return (
    <UserDaschboardContainer>
      <FilterList tags={tags} />
      <SearchArticle />
    </UserDaschboardContainer>
  );
}
