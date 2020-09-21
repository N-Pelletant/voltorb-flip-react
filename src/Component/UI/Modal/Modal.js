import React from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: `translateY(${props.show ? "0" : "-100vh"})`,
      }}>
      {props.children}
    </div>
  );
}

export default Modal;