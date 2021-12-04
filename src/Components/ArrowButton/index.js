import React from 'react'
import PropTypes from 'prop-types'
import classes from './ArrowButton.module.scss'

const ArrowButton = ({ onClick, direction, text, disabled, unvisible }) => (
  <button
    className={`${classes.Button} ${classes[direction]} ${classes[unvisible]}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

export { ArrowButton }

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  unvisible: PropTypes.string
}

ArrowButton.defaultProps = {
  disabled: null,
  unvisible: null
}
