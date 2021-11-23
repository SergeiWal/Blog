import { useEffect, useState } from "react";
import { getArticleAction } from "../../Feed/articleListActions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getUsersAction } from "../actions";
import Dashboard, { DashboardNotAllowed } from "../components/dashboard";

export default function DashboardContainer() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    dispatch(getArticleAction());
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return user.isAdmin ? (
    <Dashboard tabValue={tabValue} handleChange={handleChange} />
  ) : (
    <DashboardNotAllowed />
  );
}
