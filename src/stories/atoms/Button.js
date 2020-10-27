import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ role, size, label, ...props }) => {
  return (
    <StyledButton
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      size={size}
      role={role}
      {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 40px;
  margin: 0px 5px;
  border: none;
  border-radius: 3px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: #fff;
  text-decoration: none;

  ${({ role }) =>
    role === 'delete'
      ? `
      background-color: #e74c3c;
      text-shadow: 0px -2px #c0392b;
    `
      : `
      background-color: #2ecc71;
      text-shadow: 0px -2px #27ae60;
    `}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
        font-size: 12px;
        padding: 8px 10px;
        `;
      case 'medium':
        return `
        font-size: 14px;
        padding: 10px 14px;
        `;
      case `large`:
        return `
        font-size: 16px;
        padding: 12px 16px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 11px 20px;
          `;
    }
  }}
`;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  role: PropTypes.oneOf(['normal', 'delete']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  role: 'normal',
  size: 'medium',
  onClick: undefined
};
