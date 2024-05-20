export default function ImageCard({ src, alt, regular, onClickOpen }) {
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
}
