import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

class ButtonSecondary extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.secondary}
          {...this.props}
        >
          <Text
            style={styles.textSecondary}> {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  secondary: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#FA7268',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
  },
  textSecondary: {
    color: '#FA7268',
    fontWeight: 'bold',
  },
});

export default ButtonSecondary
