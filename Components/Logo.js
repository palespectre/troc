import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

class Logo extends React.Component {
  render () {
    return (
      <View
        style={styles.center}
      >
        <Image
          source={require('../Assets/Images/logo-blanc.png')}
          style={styles.imageSize}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  imageSize: {
     width: 100,
     height: 40,
     alignSelf: 'center',
  },
  center: {
    alignSelf:'center',
    flex: 1,
  }
});

export default Logo
