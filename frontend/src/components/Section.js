import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = props => (
  <div className="section">
    <p className="section__header">{props.title}</p>
    <div className="section__content">
      <textarea value={props.content} onChange={() => console.log('changing')} />
    </div>
  </div>
);

Section.PropTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Section;
