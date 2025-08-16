import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}
export function MainTitle({ children }: Props) {
  return (
    <header>
      <h1 id="main-title">{children}</h1>
    </header>
  );
}
