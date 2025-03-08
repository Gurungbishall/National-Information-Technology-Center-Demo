"use client";

import { useState, useEffect } from "react";
// @ts-expect-error: The 'nepali-date' module doesn't have type declarations.
import NepaliDate from "nepali-date";

const TimeAndDate: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [todayDate, setTodayDate] = useState<{ AD: string; BS: string }>({
    AD: "",
    BS: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      let hours = time.getHours();
      const minutes = time.getMinutes();
      let amPm = "";

      if (hours >= 12) {
        amPm = "PM";
      } else {
        amPm = "AM";
      }

      if (hours === 0) {
        hours = 12;
      } else if (hours > 12) {
        hours = hours - 12;
      }

      const formattedHours = hours > 9 ? hours : "0" + hours;
      const formattedMinutes = minutes > 9 ? minutes : "0" + minutes;

      const timeString = `${formattedHours}:${formattedMinutes} ${amPm}`;

      const nepaliDate = new NepaliDate();
      const nepaliDateString = nepaliDate.format("DDDD,YYYY,MMMM,DD"); // Nepali Date
      const englishDateString = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }); 

      setCurrentTime(timeString);
      setTodayDate({ AD: englishDateString, BS: nepaliDateString });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 text-sm font-bold">
        <span>
          AD: {todayDate.AD} at {currentTime}
        </span>
        <span>BS: {todayDate.BS}</span>
      </div>
    </>
  );
};

export default TimeAndDate;
