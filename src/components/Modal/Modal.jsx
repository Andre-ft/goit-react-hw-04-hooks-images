import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, onClose}) {    
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [])
  
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // render() {
    return createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  // }
}

Modal.defaultProps = {
  onClose: () => null,
};

Modal.propTypes = {
  onClose: PropTypes.func,
  imageURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
