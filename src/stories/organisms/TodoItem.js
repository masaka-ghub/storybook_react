import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';

/**
 * Primary UI component for user interaction
 */
export const TodoItem = ({ id, value, hasDeleteButton, buttonLabel, onDeleteClick }) => {
  return (
    <StyledTodoItem>
      {hasDeleteButton && <Button role="delete" size="small" label={buttonLabel} />}
      {value}
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.div`
  text-align: left;
  min-height: 40px;
  border-bottom: 1px solid #53bdff;
  padding: 15px 5px;
  font-size: 1.3em;
  color: #2f4f4f;
`;

Button.propTypes = {
  /**
   * todo-item id
   */
  id: PropTypes.number,
  /**
   * todo-item value
   */
  value: PropTypes.string,
  /**
   * has todo-item deletebutton
   */
  hasDeleteButton: PropTypes.bool,
  /**
   * button label
   */
  buttonLabel: PropTypes.string.isRequired,
  /**
   * function when deletebutton clicked
   */
  onDeleteClick: PropTypes.func
};

Button.defaultProps = {
  value: '',
  hasDeleteButton: false,
  buttonLabel: '削除',
  onDeleteClick: undefined
};
