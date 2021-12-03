import { useEffect } from "react";
import { getTagsAction } from "../../dashboard/actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import FilterList from "../components/filterList";

export default function FilterListContainer() {
  const { tags } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTagsAction());
  }, [dispatch]);

  return <FilterList tags={tags} />;
}
