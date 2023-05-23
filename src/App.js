import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
