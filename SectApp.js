/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  SectionList,
  Text,
  View
} from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Fruits',
    data: [
      {id: 0, text: 'Banana'},
      {id: 1, text: 'Apple'},
      {id: 2, text: 'Cherry'},
    ]
  },
  {
    id: 1,
    title: 'Drinks',
    data: [
      {id: 3, text: 'Tea'},
      {id: 4, text: 'Coffee'},
      {id: 5,  text: 'Juice'},
    ]
  }
] ;

const extractKey = ({id}) => id.toString() ;

export default class App extends Component {
  
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }
  
  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }
  
  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
}) ;