import React from 'react';
import PropTypes from 'prop-types';
import './Warning.css';

const Warning = props => (
  <div className="warning">
    <p className="warning__header" style={{ color: props.headerColor }}>
      {props.header}
    </p>
    <p className="warning__body">{props.body}</p>
    {props.positive ? 'Postive' : 'Negative'}
  </div>
);

Warning.propTypes = {
  headerColor: PropTypes.string,
  header: PropTypes.string.isRequired,
  body: PropTypes.string,
  positive: PropTypes.bool
};

Warning.defaultProps = {
  headerColor: 'black',
  body: "There are loads of things wrong with this article and it's quite concerning.",
  positive: true
};

export default Warning;
