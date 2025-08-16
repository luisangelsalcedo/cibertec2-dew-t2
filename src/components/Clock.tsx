import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();

      const hours = `0${currentDate.getHours()}`.slice(-2);
      const minutes = `0${currentDate.getMinutes()}`.slice(-2);
      const seconds = `0${currentDate.getSeconds()}`.slice(-2);

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div id="tiempo">{time}</div>;
}
