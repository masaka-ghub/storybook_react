import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Paragraph = ({ text, width, indent, formatted }) => {
  return (
    <Sentence width={width} indent={indent} formatted={formatted}>
      {text}
    </Sentence>
  );
};

Paragraph.propTypes = {
  /**
   * width
   */
  width: PropTypes.number,

  /**
   * should indent
   */
  indent: PropTypes.bool,

  /**
   * for formatted text
   */
  formatted: PropTypes.bool
};

const Sentence = styled.p`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  text-indent: ${props => (props.indent ? '1em' : '0em')};
  white-space: ${props => (props.formatted ? 'pre-wrap' : 'normal')};
`;
