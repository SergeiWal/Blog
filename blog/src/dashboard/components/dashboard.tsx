import { Box, Tab, Tabs } from "@mui/material";
import ArticlesInfoContainer from "../containers/articlesInfoContainer";
import UsersInfoContainer from "../containers/usersInfoContainer";
import TabPanel from "./tabPanel";
import TabsInfoConteiner from "../containers/tagsInfoContainer";
import {
  AppTab,
  AppTabs,
  DashboardContainer,
  TabPanelContainer,
} from "./styled";

export const DashboardNotAllowed = () => (
  <div style={{ marginTop: 60, textAlign: "center" }}>
    This page is allowed only to admin
  </div>
);

export type DashboardProps = {
  tabValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Dashboard({ tabValue, handleChange }: DashboardProps) {
  return (
    <DashboardContainer>
      <TabPanelContainer>
        <AppTabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#51ACAE",
            },
          }}
        >
          <AppTab label="Articles" />
          <AppTab label="Users" />
          <AppTab label="Tags" />
        </AppTabs>
      </TabPanelContainer>
      <TabPanel value={tabValue} index={0}>
        <ArticlesInfoContainer />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <UsersInfoContainer />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <TabsInfoConteiner />
      </TabPanel>
    </DashboardContainer>
  );
}
