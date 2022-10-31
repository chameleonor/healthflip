import { Fragment, useContext, useState, useEffect } from "react";
// import Day from "./Day";

import CalendarContext from "../../context/Calendar/CalendarContext";
import { getMonth } from "../../utils/calendar";

export default function Month() {
  const { monthIndex } = useContext(CalendarContext);
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    // console.log("Month Component");
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="month-grid">
      {currenMonth.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            // <Day day={day} key={idx} rowIdx={i} />
            <div key={idx}>{idx}</div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
