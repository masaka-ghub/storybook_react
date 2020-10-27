import React from 'react';
import { Label } from './Label';

export default {
  title: 'Example/Label',
  component: Label
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'label-text'
};

export const InformationTips = Template.bind({});
InformationTips.args = {
  text: 'label-text',
  className: 'form-label__tips--information'
};
