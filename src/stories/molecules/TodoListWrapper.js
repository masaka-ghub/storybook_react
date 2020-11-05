import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../molecules/TodoItem';


export const TodoListWrapper = ({todoItems, dispatchDelete}) => {
  return (
  <ListWwrapper>
    {todoItems.map((item, i) => (
      <TodoItem key={i} hasDeleteButton buttonLabel="削除" value={item.value} onDeleteClick={dispatchDelete}></TodoItem>
    ))}
  </ListWwrapper>
  )
}

TodoListWrapper.propTypes = {
  todoItems: PropTypes.array,
  dispatchDelete: PropTypes.func
}


const ListWwrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  border: solid 1px #000000;
  width: 300px;
  height: 480px;
  background-color: #fff;
  overflow-y: auto;
`;

TodoListWrapper.defaultProps = {
  dispatchDelete: () => console.log('clicked')
};
