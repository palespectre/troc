import React from 'react'
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text } from 'react-native'

class Rate extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render () {
    return (
      <View
        style={[this.props.color ? {backgroundColor: '#f4f4f4'} : {backgroundColor: 'white'},
            {width:'90%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5}
      ]}>
        <Image
          style={styles.image}
          source={this.props.photo}
        />
        <View
          style={styles.infoWrapper}>
          <View
            style={styles.wrapperRate}>
            <Text
              style={styles.name}>{this.props.name}</Text>
            <Image
              style={styles.evaluation}
              source={require('../Assets/Images/rate1.png')}
            />
          </View>
          <Text
            style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
    resizeMode:'contain',
  },
  infoWrapper: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  evaluation: {
    width: 50,
    height: 10,
    borderRadius: 50,
    resizeMode:'contain',
  },
  description: {
    fontSize: 16,
  }
});

export default Rate
