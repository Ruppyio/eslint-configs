/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

const ReactTestFile = ({ test, test2 }) => {
  return <div className="test">Hello world! {test} {test2}</div>;
};

ReactTestFile.propTypes = {
  test: PropTypes.string,
  test2: PropTypes.string.isRequired,
};

ReactTestFile.defaultProps = {
  test: 'test',
};

export default ReactTestFile;
