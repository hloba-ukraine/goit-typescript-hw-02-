import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";
Modal.setAppElement("#root");
interface ImageModalProps {
  isOpen: boolean;
  image: string;
  onCloseModal: () => void;
}
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  image,
  onCloseModal,
}) => {
  return (
    <Modal
      overlayClassName={css.backdrop}
      className={css.modalWindow}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      <img className={css.imageModal} src={image} />
    </Modal>
  );
};

export default ImageModal;
