import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
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

