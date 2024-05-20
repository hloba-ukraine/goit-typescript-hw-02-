import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onCloseModal }) => {
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
