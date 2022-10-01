import Box from "@mui/material/Box";
// import Sidebar from "./Sidebar";
// import Labels from "./Labels";
import Month from "./Month";

export const Calendar = () => {
  console.log("Calendar Component");
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            width: "350px",
          }}
        >
        <Sidebar />
        <Labels />
      </Box> */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        >
          <Month />
        </Box>
      </Box>
    </div>
  );
};

export default Calendar;
