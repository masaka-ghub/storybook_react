import React from 'react';
import '../index.css';

export const Label = ({ text, className }) => {
  return <label className={['form-label', className].join(' ')}>{text}</label>;
};
