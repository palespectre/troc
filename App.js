import React from "react";
import Navigation from './Navigation';
import { Provider } from 'unstated';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Navigation />
      </Provider>
    );
  }
}
