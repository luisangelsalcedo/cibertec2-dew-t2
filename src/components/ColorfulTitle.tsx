import { useState, useEffect, type ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

export function ColorfulTitle({ children }: Props) {
  const [color, setColor] = useState("rgb(100, 100, 100)"); // color inicial

  useEffect(() => {
    const timer = setInterval(() => {
      const r = Math.round(Math.random() * 145);
      const g = Math.round(Math.random() * 145);
      const b = Math.round(Math.random() * 145);

      setColor(`rgb(${r}, ${g}, ${b})`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span style={{ color }}>{children}</span>;
}
