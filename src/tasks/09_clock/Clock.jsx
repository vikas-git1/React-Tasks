import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    period: "AM",
  });

  useEffect(() => {
    let interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      setTime({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        period: period,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[80vh] w-full flex justify-center items-center border-2 border-amber-50  bg-gray-500 rounded-2xl">
      <div className="border-2 border-amber-50 h-[20vh] w-[30vw] px-20 bg-gray-600  flex justify-around items-center rounded-2xl text-amber-50 font-bold text-2xl">
        <span>{time.hours}</span> {" : "} <span>{time.minutes}</span> {" : "}{" "}
        <span>{time.seconds}</span> {" : "}
        <span>{time.period}</span>
      </div>
    </div>
  );
};

export default Clock;
