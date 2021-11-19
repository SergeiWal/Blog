import { useEffect, useState } from "react";
import { getArticleAction } from "../../Feed/articleListActions";
import { useAppDispatch } from "../../store/store";
import { getUsersAction } from "../actions";
import Dashboard from "../components/dashboard";

export default function DashboardContainer() {
  const dispatch = useAppDispatch();
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    dispatch(getArticleAction());
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return <Dashboard tabValue={tabValue} handleChange={handleChange} />;
}
