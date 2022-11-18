import Stack from "@mui/material/Stack";

import SmallCalendar from "./SmallCalendar";
// import Labels from './Labels';

export default function Sidebar() {
  return (
    <Stack
      direction="column"
      spacing={2}
      p={1}
      sx={{ border: "1px solid", borderColor: "rgba(229, 231, 235, 1)" }}
    >
      <SmallCalendar />
      {/* <Labels /> */}
    </Stack>
  );
}
