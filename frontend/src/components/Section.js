import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = props => (
  <div className="section">
    <p className="section__header">{props.title}</p>
    <div className="section__content">
      {props.contentHeight > 1 ? (
        <textarea
          value={props.content}
          rows={props.contentHeight}
          onChange={() => console.log('changing')}
        />
      ) : (
        <input type="text" value={props.content} onChange={() => console.log('changing')} />
      )}
    </div>
    <button onClick={() => props.checkBias()}>Check</button>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentHeight: PropTypes.number,
  checkBias: PropTypes.func
};

Section.defaultProps = {
  contentHeight: 4,
  checkBias: () => console.log('Checking bias')
};

export default Section;
