import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Color, Font } from './Design';

const Button = ({ onPress, style, labelStyle, children, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={style}>
        <Text style={labelStyle}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{"Welcome to the React Native Lugg Exercise!"}</Text>
        </View>
        <View style={styles.body}>
          { /* YOUR COMPONENT HERE */ }
          <Text>{" Your Component Here"}</Text>
        </View>
        <View style={styles.footer}>
          <Button style={styles.button} labelStyle={styles.buttonLabel}>{"Schedule"}</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
  },
  body: {
    height: 248,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    ...Font.regular,
    color: '#fff',
    textAlign: 'center',
    maxWidth: 320
  },
  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.action
  },
  buttonLabel: {
    ...Font.medium,
    color: Color.primary,
    fontSize: 18
  }
});

export default App;
