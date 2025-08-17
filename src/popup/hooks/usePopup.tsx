import { useContext } from "react";
import { PopupContext } from "../contexts/popup.context";

export function usePopup() {
  const context = useContext(PopupContext);

  console.log({ context });

  return context;
}
