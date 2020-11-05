import React from 'react';
import { TodoList } from './TodoList';

export default {
  title: 'Example/organisms/TodoList',
  component: TodoList
};

const Template = args => <TodoList {...args} />;

export const Normal = Template.bind({});
Normal.args = { 
  headerMessage: 'test message', 
  todoItems:  [
    { id: 1, value: '1st-todo-item'},
    { id: 2, value: '2nd-todo-item'}
  ]
};
