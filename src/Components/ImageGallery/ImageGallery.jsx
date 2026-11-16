import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      
      {images.map((image, index) => {

        console.log(image.id)
        console.log(images.length)
        console.log(images.length)


        return (
          <ImageGalleryItem key={image.id} isAnchor={index === images.length - 12} image={image} />

        );
      })}
    </ul>
  );
};
