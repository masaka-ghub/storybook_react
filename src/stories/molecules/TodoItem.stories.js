import React from 'react';
import { TodoItem } from './TodoItem';

export default {
  title: 'Example/molecules/TodoItem',
  component: TodoItem
};

const Template = args => <TodoItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 'test-todo',
  hasDeleteButton: true,
  buttonLabel: '削除'
};
