import css from "./ImageGalleryItem.module.css";
import {useRef, useEffect} from "react"

const scrollToElement = (elemRef, offset = 0) => {
  const top = elemRef.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const ImageGalleryItem = ({image, isAnchor}) => { 
  const itemRef = useRef(null)
  useEffect(() => {
    if (itemRef.current) {
      console.log(itemRef.current)
      scrollToElement(itemRef.current, 72)
    }
  }, [isAnchor]);

  return (
    <li className={css.ImageGalleryItem} ref={isAnchor ? itemRef : null}>

      <img src={image.webformatURL}  alt={image.tags} className={css.ImageGalleryItemImage}/>
    </li>
  );
};
