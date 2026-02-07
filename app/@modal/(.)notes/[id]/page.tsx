import Modal from "./Modal";
import NotePreviewClient from "./NotePreview.client";

const NotePreview = () => {
  return (
    <Modal>
      <NotePreviewClient />
    </Modal>
  );
};

export default NotePreview;
