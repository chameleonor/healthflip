import { Fragment, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";

import { monthIndexState } from "../../state";
import Day from "../Day";

import { getMonth } from "../../utils/calendar";

export default function Month() {
  const monthIndex = useRecoilValue(monthIndexState);
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Box
      className="month-grid"
      sx={{
        width: "1024px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {currenMonth.map((row, i) => {
        return (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </Fragment>
        );
      })}
    </Box>
  );
}
