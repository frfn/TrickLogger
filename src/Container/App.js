import React, { Component } from 'react';
import styles from './App.module.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      tricks: [],
      toggleButton: false,
      addNewTrick: {
        trick: undefined,
      },
      yourCool: false
    }
  }



  render() {
    return(
      <div className={styles.App}>
        Hello World.
      </div>
    );
  }
}
