import { useEffect, useRef, type ReactNode } from "react";
import { Container } from "../../components/Container";
import "./popup.scss";

interface Props {
  isOpen: boolean;
  children: ReactNode | ReactNode[];
  handlerClose: () => void;
}

export function Popup({ isOpen, children, handlerClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current) {
      if (isOpen) dialog.current.showModal();
      else dialog.current.close();
    }
  }, [isOpen]);

  return (
    <dialog id="popup" className="popup" ref={dialog}>
      <button onClick={() => handlerClose()} className="popup-close">
        X
      </button>

      <Container>{children}</Container>
    </dialog>
  );
}
