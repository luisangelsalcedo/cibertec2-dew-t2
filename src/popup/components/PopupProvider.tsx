import { useState, type ReactNode } from "react";
import { Popup } from "./Popup";
import { PopupContext } from "../contexts/popup.context";

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode | null) => {
    setIsOpen(true);
    setContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, openModal }}>
      <Popup isOpen={isOpen} handlerClose={closeModal}>
        {content}
      </Popup>
      {children}
    </PopupContext.Provider>
  );
}
