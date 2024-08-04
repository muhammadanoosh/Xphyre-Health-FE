// src/components/Modal.js
import React from 'react';

const Modal = ({ visible, message, onClose }) => {
  if (!visible) return null;

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    content: {
      background: '#fff',
      padding: '20px',
      borderRadius: '5px',
      textAlign: 'center',
      width: '80%',
      maxWidth: '500px',
      position: 'relative',
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      fontSize: '24px',
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <p>{message}</p>
        <button className="cs_btn cs_style_1" type="submit" onClick={onClose}>
            <span>Okay</span>
          </button>
      </div>
    </div>
  );
};

export default Modal;
