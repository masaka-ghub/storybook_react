import React from 'react';
import { TodoListWrapper } from './TodoListWrapper';

export default {
  title: 'Example/molecules/TodoListWrapper',
  component: TodoListWrapper
};

const Template = args => <TodoListWrapper {...args} />;

export const Single = Template.bind({});
Single.args = {
  todoItems: [{ id: 1, value: '1st-todo-item'}]
};

export const Multi = Template.bind({});
const todoItems = [
  { id: 1, value: '1st-todo-item'},
  { id: 2, value: '2nd-todo-item'}
]
const deleteFn = (id) => { todoItems = todoItems.filter(item => item.id !== id);}
Multi.args = {
  todoItems: todoItems,
  onDeleteClick: deleteFn
}
