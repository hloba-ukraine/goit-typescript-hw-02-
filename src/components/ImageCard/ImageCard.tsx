import React from "react";
interface ImageCardProps {
  src: string;
  alt: string;
  regular: string;
  onClickOpen: (url: string) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  regular,
  onClickOpen,
}) => {
  return (
    <div>
      <img
        onClick={() => onClickOpen(regular)}
        width="360"
        height="250"
        src={src}
        alt={alt}
      />
    </div>
  );
};
export default ImageCard;
