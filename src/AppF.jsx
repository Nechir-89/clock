import { useState, useEffect } from "react";
import './App.css'

import findTimezone from "./helpers/functions";
export default function AppF() {

  const [timeAndDate, setTimeAndDate] = useState(new Date());

  useEffect(() => {
    const timeID = setInterval(() => {
      setTimeAndDate(new Date());
    }, 1000)
    // console.log(timeID)
    return () => clearInterval(timeID);
  }, []);

  return (
    <div className="wrapper">
      <div className="time">
        <span>{('0' + timeAndDate.getHours()).slice(-2)}</span>:
        <span>{('0' + timeAndDate.getMinutes()).slice(-2)}</span>:
        <span>{('0' + timeAndDate.getSeconds()).slice(-2)}</span>
        <div className="amOrPm">
          { }
        </div>
      </div>
      <div className="timezone">
        {
          findTimezone(timeAndDate)
        }
      </div>
    </div>
  );
}
