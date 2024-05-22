import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import React from "react";
interface data {
  id: string;
  urls: {
    id: string;
    regular: string;
    small: string;
  };
  alt_description: string;
}
interface ImageGalleryProps {
  dataCard: data[];
  onClickOpen: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  dataCard,
  onClickOpen,
}) => {
  return (
    <ul className={css.list}>
      {dataCard.map((data) => {
        return (
          <li key={data.id}>
            <ImageCard
              onClickOpen={onClickOpen}
              regular={data.urls.regular}
              src={data.urls.small}
              alt={data.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
