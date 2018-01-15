/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { SignedOut, SignedIn } from "./router";

// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isManager: true
    };
    this.changeUserType = this.changeUserType.bind(this);
  }

  changeUserType = isManager => {
    if (isManager !== this.state.isManager){
      this.setState({
        isManager
      })
    }
  };

  render() {
    console.log("STATE:: ", this.state);
    const { isManager } = this.state;
    console.log("ISMANAGER:: ", this.changeUserType);
    return (
      <SignedOut
        screenProps={{
          isManager,
          changeUserType: isManager => this.changeUserType(isManager)
        }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
