import React from 'react';
import {FormattedMessage} from 'text-provider';

export default class Banner extends React.Component {
  render() {
    return(
      <div className='App'>
      <h1>
      <FormattedMessage id='title' />
      </h1>
        <h2>
        <FormattedMessage id='subTitle' />
        </h2>
      </div>
    );
  }
}