import React from 'react';
import Section from './components/Section';
import SectionContainer from './containers/Section';
import Warning from './components/Warning';
import WarningContainer from './containers/Warning';
import './MainContainer.css';

const getContent = () => {
  const options = [
    `The UK would be welcome to stay in the EU if it changed its mind about Brexit, Donald Tusk has suggested.

  The European Council President told MEPs that the UK would leave the bloc unless it had a "change of heart".
  
  "We haven't had a change of heart. Our hearts are still open for you."
  
  The comments were welcomed by MPs who want a referendum on the final Brexit deal but Environment Secretary Michael Gove said the British public had voted in record numbers to leave the EU.
  
  "We have a great future outside the European Union and we should be embracing that," he said.
  
  The government has said there will be no second vote ahead of the UK's exit in March 2019.
  
  Labour leader Jeremy Corbyn has also dismissed the idea while insisting that MPs have a "meaningful vote" in Parliament on the terms of the withdrawal agreement.
  
  Former UKIP leader Nigel Farage has said the prospect of a second vote cannot be ruled out, although he was confident it would return a larger margin for Leave than in 2016 - when 17.4 million people voted for Brexit.
  
  The EU, he told BBC World Service, was intent on "putting something on the table so unattractive to Britain that Parliament will vote for us to have a second referendum".`,
    `A future generation of MPs will seek to "improve or undo" Brexit if it does not work for young people, a former cabinet minister has said.

  Justine Greening - who quit as education secretary in last week's reshuffle - said MPs had a duty to make sure Brexit was "sustainable".
  
  She was speaking as the Commons debated the government's EU (Withdrawal) Bill.
  
  MPs have now voted to back the bill which means it moves to the House of Lords.
  
  Tusk: UK can still change its mind
  EU bill 'an assault on devolution'
  Ms Greening resigned from government last week after refusing the move from education to the Department for Work and Pensions she was offered by Prime Minister Theresa May.
  
  Speaking for the first time from the backbenches, the Putney MP said: "I represent a very young constituency here in London.
  
  "The bottom line is that looking ahead, if Brexit doesn't work for young people in our country in the end it will not be sustainable.
  
  "When they take their place here they will seek to improve or undo what we've done and make it work for them.
  
  "So we do absolutely have a duty in this House to look ahead and ensure that whatever we get is sustainable and works for them."
  
  Asked about Ms Greening's comment, Theresa May's official spokesman said: "The prime minister is clear that she is determined to deliver a Brexit which works for all sections of society. Of course that would include young people."
  
  Votes later
  The draft EU bill has already been the subject of highly charged debate in the Commons, facing hundreds of attempts to change its wording and suffering one government defeat.
  
  Ministers were not expected to lose Wednesday evening's third reading vote, and it passed by 324 votes to 295.
  
  But there have been warnings of trouble further ahead when the House of Lords takes over.
  
  The government can seek to overturn any changes inflicted by the Lords.
  
  The UK is due to leave the EU in March 2019, and the EU (Withdrawal) Bill is a key part of the government's Brexit strategy.
  
  It aims to end the supremacy of EU law, which would be copied into UK law in order to ensure a smooth transition on Brexit day.`
  ];

  return options[Math.floor(Math.random() * options.length)];
};

const MainContainer = () => (
  <div className="main-container">
    <div className="main-container__editor">
      <Section title="Title" contentHeight={1} content="More Brexit gloom" />
      <Section title="Summary" contentHeight={4} content="Another thing about Brexit" />
      <SectionContainer title="Body" contentHeight={10} content={getContent()} />
      <Section title="Keywords" contentHeight={1} content="brexit, justine greening" />
    </div>
    <div className="main-container__results">
      <WarningContainer header="Diversity warning" headerColor="#d0021b" />
      <Warning
        header="This article is best suited to"
        body={
          <ul>
            <li>Comfortably-off families in modern housing</li>
            <li>Wealthy countryside commuters</li>
          </ul>
        }
      />
    </div>
  </div>
);

export default MainContainer;
