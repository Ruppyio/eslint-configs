/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

const ReactTestFile = ({ any }) => {
  return <div className="test">Hello world! {any}</div>;
};

ReactTestFile.propTypes = {
  any: PropTypes.any,
};

export default ReactTestFile;
