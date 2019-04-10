import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

class ButtonPrimary extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.primary}
          {...this.props}
        >
          <Text
          style={styles.textPrimary}> {this.props.title} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  primary: {
    backgroundColor: '#FA7268',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  textPrimary: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default ButtonPrimary
