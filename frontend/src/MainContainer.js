import React from 'react';
import Section from './components/Section';
import Warning from './components/Warning';
import WarningContainer from './containers/Warning';
import './MainContainer.css';

const MainContainer = () => (
  <div className="main-container">
    <div className="main-container__editor">
      <Section title="Title" contentHeight={1} content="More Brexit gloom" />
      <Section title="Summary" contentHeight={4} content="Another thing about Brexit" />
      <Section title="Body" contentHeight={10} content="yo" />
      <Section title="Keywords" contentHeight={1} content="brexit, justine greening" />
    </div>
    <div className="main-container__results">
      <WarningContainer header="Diversity warning" headerColor="#d0021b" />
      <Warning header="This article is best suited to" />
    </div>
  </div>
);

export default MainContainer;
