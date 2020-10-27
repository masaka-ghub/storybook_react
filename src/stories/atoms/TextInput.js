import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({ value, size, maxLength, placeholder, defaultValue, onChange, ...props }) => {
  return (
    <StyledTextInput
      type="text"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      size={size}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}></StyledTextInput>
  );
};

const StyledTextInput = styled.input`
  font-size: 16px;
  height: 30px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
`;

TextInput.propTypes = {
  /**
   * size
   */
  size: PropTypes.number,
  /**
   * max length
   */
  maxLength: PropTypes.number,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * input value
   */
  value: PropTypes.string,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  defaultValue: '',
  onChange: undefined
};
