import css from "./ImageGalleryItem.module.css";
import {useRef, useEffect, useState} from "react"
import { Modal } from "../Modal/Modal";

const scrollToElement = (elemRef, offset = 0) => {
  const top = elemRef.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};



export const ImageGalleryItem = ({image, isAnchor}) => { 
  console.log(image)
  const itemRef = useRef(null)

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (itemRef.current) {
      console.log(itemRef.current)
      scrollToElement(itemRef.current, 72)
    }
  }, [isAnchor]);

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
  <>
    <li onClick={openModal}  className={css.ImageGalleryItem} ref={isAnchor ? itemRef : null}>
      <img src={image.webformatURL}  alt={image.tags} className={css.ImageGalleryItemImage}/>
    </li>
    {isOpenModal &&  <Modal largeImageURL={image.largeImageURL} alt={image.tags} onClose={closeModal} /> }
    </>
  );
};
