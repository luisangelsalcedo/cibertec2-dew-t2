import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode | ReactNode[] }) {
  return <div className="container">{children}</div>;
}
