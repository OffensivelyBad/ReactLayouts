import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { 
      toolbar, 
      toolbarButton, 
      toolbarTitle, 
      mainContainer, 
      content 
    } = styles;

    return (
      <View style={mainContainer}>
        <View style={toolbar}>
          <Text style={toolbarButton}>Add</Text>
          <Text style={toolbarTitle}>the Title is here</Text>
          <Text style={toolbarButton}>Like</Text>
        </View>
        <View style={content}>
          <Text>This is content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#ebe'
  }
});
