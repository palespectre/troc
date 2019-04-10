import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.searchInput}
        placeholder="Rechercher un objet"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
      />
    );
  }
}

const styles = StyleSheet.create({
 searchInput: {
   width: '60%',
   paddingHorizontal: 20,
   paddingVertical: 15,
   borderRadius: 50,
   backgroundColor: '#00000080',
   position: 'absolute',
   top: 30,
   alignSelf: 'center',
   color: 'white',
   textAlign: 'center',
   fontWeight: 'bold',
 },
});
