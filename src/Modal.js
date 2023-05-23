import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  console.log(isModalOpen);

  return (
    isModalOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
