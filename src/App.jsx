import React from 'react';
import {TextProvider, FormattedMessage} from 'text-provider';
import Banner from './Banner';
import HOCExample from './HOCExample';
import './App.css';
import localizedStrings from './localized-strings-en.json';

const stringVariables = {
  name: 'joe doe'
};

export default class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <TextProvider globalText={localizedStrings}>
         <Banner />
          <h3>
          <FormattedMessage id='note' values={stringVariables} />
          </h3>
          <h3>
          <HOCExample />
          </h3>
        </TextProvider>
      
      </React.Fragment>
    );
  }
}

