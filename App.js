import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { 
      toolbar, 
      toolbarButton, 
      toolbarTitle, 
      mainContainer, 
      content,
      messageBox,
      messageBoxBodyText,
      messageBoxTitleText
    } = styles;

    return (
      <View style={mainContainer}>
        <View style={toolbar}>
          <Text style={toolbarButton}>Add</Text>
          <Text style={toolbarTitle}>the Title is here</Text>
          <Text style={toolbarButton}>Like</Text>
        </View>
        <View style={content}>
          <View style={messageBox}>
            <View>
              <Text style={messageBoxTitleText}>
                A simple message
              </Text>
            </View>
            <View>
              <Text style={messageBoxBodyText}>
                This is a longer message that will allow us to see the alignment in action.
              </Text>
            </View>
          </View>
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
    backgroundColor: '#ebe',
    alignItems: 'flex-end', // flex-start, flex-end, stretch, center
    flexDirection: 'row'
    // , justifyContent: 'center'
  },
  messageBox: {
    backgroundColor: '#ef553a',
    width: 300,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  },
  messageBoxTitleText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  messageBoxBodyText: {
    color: '#fff',
    fontSize: 16
  }
});
