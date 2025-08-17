import { createContext, type ReactNode } from "react";

interface PopupContextInterface {
  isOpen: boolean;
  openModal: (content: ReactNode | null) => void;
}

export const PopupContext = createContext<PopupContextInterface>(null!);
