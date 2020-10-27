import React from 'react';
import { TextSentence } from './TextSentence';

export default {
  title: 'Example/atoms/TextSentence',
  component: TextSentence
};

const Template = args => <TextSentence {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'text content'
};

export const FormattedText = Template.bind({});
FormattedText.args = {
  text: `Multi-line text 
with line-break.
  `,
  formatted: true
};

export const Indent = Template.bind({});
Indent.args = {
  text: `The first line is indented 
and the other lines are 
not indented.
`,
  indent: true,
  formatted: true
};
