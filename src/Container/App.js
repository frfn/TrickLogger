/*
We did lots of console logging to debug.

Errors mostly happened with individual counter for trick. Initially thought of a counter IN state... did not make sense.
 - Fix was to include counter prop in createTrick and increase/decrease by one.
 - To do so, we found index of trick THEN we accessed the COUNTER prop and added/minus one.

Errors also happened while finding the INDEX number of the tricks. Method 'findIndex'
 - The reason that we were getting errors is because of HOW the variable was passed IN Trick.js
 - I solved the issue by correctly using the prop.

*/

import React, { Component } from 'react';
import styles from './App.module.css';

/* Componenets */
import Header from '../Component/Header/Header'
import Body from '../Component/Body/Body'
import Aux from '../Component/HOC/Aux'

/* Context */
import TricksContext from '../Component/Context/tricks-context'
import CounterContext from '../Component/Context/counter-context'
import AuthContext from '../Component/Context/auth-context'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      tricks: [],
      authenticated: false,
      toggleState: false,
      createTrick: {
        trick: '',
        desc: '',
        counter: 0
      }
    }
  }

  /* Sets toggleState to true|false, will display trick list */
  toggleButton = () => {
    this.setState(state => ({
      toggleState: !state.toggleState
    }), () => { console.log(this.state.toggleState)})
  }

  logIn = () => {
    this.setState({
      authenticated: true
    })
  }

  logOut = () => {
    this.setState({
      authenticated: false
    })
  }

  /* for the FORMS, check Body.js */
  changeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      createTrick: {
        ...this.state.createTrick,
        [name]: value
      }
    }) // , () => { console.log(this.state.createTrick)} – for
  }

  /* for the FORMS, check Body.js */
  clickSubmitHandler = (e) => {
    e.preventDefault();
    const list = this.state.tricks;
    const trick = this.state.createTrick;
    list.push(trick)
    this.setState({
      tricks: list,
      createTrick: {
        ...this.state.createTrick,
        counter: 0
      }
    })
  }

  /* Deletes by index */
  clickDeleteHandler = (index) => {
    const list = this.state.tricks;
    list.splice(index, 1);
    this.setState({
      tricks: list
    })
  }

  /* Finding the index of the trick so we can manipulate its counter variable. */
  findIndex = (name) => {
     return this.state.tricks.findIndex(trick => trick.trick === name)
  }

  /* We are UPDATING THE VALUE inside the object, not the whole state. */
  increaseCounter = (name) => {
    const trickIndex = this.findIndex(name);
    const list = this.state.tricks;
    const trick = list[trickIndex];
    trick.counter += 1
    this.setState({
      tricks: list
    })
  }

  /* From above, we are not depending on State, so we don't have to worry about unexpected behavior. */
  decreaseCounter = (name) => {
    const trickIndex = this.findIndex(name);
    const list = this.state.tricks;
    const trick = list[trickIndex];

    if(trick.counter > 0){
      trick.counter -= 1
    }
    this.setState({
      tricks: list
    })
  }

  /* getCount to retrieve the value for counter for our trick */
  getCount = (name) => {
    const trickIndex = this.findIndex(name);
    const list = this.state.tricks;
    const trick = list[trickIndex];
    const count = trick.counter
    return count;
  }

  /* Very LEAN. Yay. */
  render() {
    const {toggleState, tricks, authenticated} = this.state;

    return(
      <Aux className={styles.App}>
        <AuthContext.Provider 
          value={{
            authenticated: authenticated,
            logIn: this.logIn,
            logOut: this.logOut
          }}
        >

          <Header />
          <hr></hr>

          <TricksContext.Provider
            value={{
              trickList: tricks
            }}
          >
            <CounterContext.Provider
              value={{
                /* The reason why this works, we are getting NAME of trick */
                counter: this.getCount,
                increaseCounter: this.increaseCounter,
                decreaseCounter: this.decreaseCounter
              }}
            >
              <Body 
                tricks={tricks}
                toggleState={toggleState}
                toggleButton={this.toggleButton}
                changeHandler={this.changeHandler}
                clickSubmitHandler={this.clickSubmitHandler}
                clickDeleteHandler={this.clickDeleteHandler}
              />

            </CounterContext.Provider>
          </TricksContext.Provider>
        </AuthContext.Provider>
      </Aux>
    );
  }
}