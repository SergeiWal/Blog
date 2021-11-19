import { Box, Tab, Tabs } from "@mui/material";
import ArticlesInfoContainer from "../containers/articlesInfoContainer";
import TabPanel from "./tabPanel";

export type DashboardProps = {
  tabValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Dashboard({ tabValue, handleChange }: DashboardProps) {
  return (
    <Box sx={{ width: "100%", marginTop: 7 }}>
      <Box sx={{ borderBottom: 1, borderColor: "black" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor={"inherit"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab label="Articles" />
          <Tab label="Users" />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <ArticlesInfoContainer />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Users
      </TabPanel>
    </Box>
  );
}
