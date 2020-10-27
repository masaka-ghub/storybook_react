import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/atoms/Button',
  component: Button
};

const Template = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  role: 'normal',
  size: 'medium',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  role: 'normal',
  size: 'small',
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  role: 'normal',
  size: 'large',
  label: 'Button'
};

export const Delete = Template.bind({});
Delete.args = {
  role: 'delete',
  size: 'medium',
  label: 'Button'
};
