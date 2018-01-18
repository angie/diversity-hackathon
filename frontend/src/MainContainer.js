import React, { Component } from 'react';
import Section from './components/Section';
import Warning from './components/Warning';
import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-container__editor">
          <Section title={'Title'} content={'The content of our text box'} />
          <Section title={'Summary'} content={'The content of our text box'} />
          <Section title={'Body'} content={'The content of our text box'} />
          <Section title={'Keywords'} content={'The content of our text box'} />
        </div>
        <div className="main-container__results">
          <Warning header="Diversity warning" headerColor="#d0021b" />
          <Warning header="This article is best suited to" />
        </div>
      </div>
    );
  }
}

export default MainContainer;
