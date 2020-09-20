import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  faceUp: PropTypes.bool.isRequired,
  value: PropTypes.oneOf([1,2,3,"bomb"]).isRequired,
  click: PropTypes.func.isRequired,
};

function Card(props) {
  return <div></div>
}

export default Card;