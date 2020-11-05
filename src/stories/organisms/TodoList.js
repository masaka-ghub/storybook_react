import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { Paragraph } from '../atoms/Paragraph';
import { TodoListWrapper } from '../molecules/TodoListWrapper';

/**
 * Primary UI component for user interaction
 */
export const TodoList = ({ headerMessage, todoItems, dispatchDelete, inputValue, onTodoInputChange, appendTodo }) => {
  return (
    <TodoWrapeer>
      <Paragraph>{headerMessage}</Paragraph>
      <TodoListWrapper todoItems={todoItems}></TodoListWrapper>
      <input type="text" value={inputValue} onChange={onTodoInputChange} />
      <button onClick={appendTodo}>Todo追加</button>
    </TodoWrapeer>
  );
};


const TodoWrapeer = styled.div`
  text-align: center
`;

Button.propTypes = {

  headerMessage: PropTypes.string,

  todoItems: PropTypes.array,

  dispatchDelete: PropTypes.func,

  inputValue: PropTypes.string,

  onTodoInputChange: PropTypes.func,

  appendTodo: PropTypes.func
};

TodoList.defaultProps = {
  headerMessage: '',
  todoItems: [],
  dispatchDelete: undefined,
  inputValue: '',
  onTodoInputChange: undefined,
  appendTodo: undefined
};
