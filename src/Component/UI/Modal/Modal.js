import React from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  let conditionalStyles = {
    transform: `translateY(${props.show ? "0" : "-100vh"})`
  }

  return (
    <div
      className={classes.Modal}
      style={conditionalStyles}>
      {props.children}
    </div>
  );
}

export default Modal;