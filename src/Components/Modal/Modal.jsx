import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export const Modal = ({ largeImageURL, alt, onClose}) => {

    const onBackDropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }

    useEffect (() => {
        const handleKeyDown = e => {
            if (e.code === "Escape") {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

  return createPortal(
    <div onClick={onBackDropClick} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>,
    document.body,
  );
};
