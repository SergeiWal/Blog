import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", marginTop: 7 }}>
      <Box sx={{ borderBottom: 1, borderColor: "black" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor={"inherit"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab label="Statistick" />
          <Tab label="Articles" />
          <Tab label="Users" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Statistick
      </TabPanel>
      <TabPanel value={value} index={1}>
        Articles
      </TabPanel>
      <TabPanel value={value} index={2}>
        Users
      </TabPanel>
    </Box>
  );
}
