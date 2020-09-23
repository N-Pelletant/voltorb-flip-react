import React from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  const direction = props.reverse ? "100vh" : "-100vh";

  const conditionalStyles = {
    transform: `translateY(${props.show ? "0" : direction})`
  }

  return (
    <div
      className={classes.Modal}
      style={conditionalStyles}>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;