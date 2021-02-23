import React from 'react';
import PropTypes from 'prop-types';
import { button } from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            type="button"
            className={button}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
