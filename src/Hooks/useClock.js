import { useState, useEffect } from "react";

const useClock = () => {
  const [isDay, setIsDay] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    setIsDay(hour > 6 && hour < 18);
    setTime(
      date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setDate(
      date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    setIsDay(hour > 6 && hour < 18);
    setTime(
      date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    setDate(
      date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, 10000);

  return { isDay, time, date };
};

export default useClock;
