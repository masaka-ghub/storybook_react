import React from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Example/atoms/TextInput',
  component: TextInput
};

const Template = args => <TextInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'placeholder'
};
