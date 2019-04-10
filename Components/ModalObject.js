import React from 'react'
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Linking } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import Carousel from "react-native-carousel-control"
import { Subscribe } from 'unstated'
import geolib from 'geolib'

class ModalObject extends React.Component {

  constructor(props){
      super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render () {
    return (
    <Subscribe to={[CardSmall]}>
    {modal => (
      <Modal
        style={styles.absolute}
        visible={this.state.modalVisible}>
          <View
            style={styles.modal}>
            <View
              style={styles.paddingHorizontal}>
              <Text
                style={styles.categorieModal}>
                {this.props.categorie}
              </Text>
              <Text
                style={styles.titleModal}>
                {this.props.title}
              </Text>
              <View
                style={styles.wrapperLocation}>
                <View
                  style={styles.row}>
                  <Image
                    style={styles.locationImg}
                    source={require('../Assets/Images/location.png')}
                  />
                  <Text>
                    {this.props.longitude}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                      onPress={() => {
                  }}>
                    <Text
                      style={ styles.owner }>
                      { this.props.owner }
                    </Text>
                    <Image
                      style={styles.evaluation}
                      source={this.props.evaluation}
                      {...this.props}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Carousel
              pageStyle={{ marginVertical: 20 }}
              sneak={80}>
              <Image
                style={styles.imgModal}
                source={this.props.imgModal}
                {...this.props}
              />
              <Image
                style={styles.imgModal}
                source={this.props.imgModal}
                {...this.props}
              />
            </Carousel>
            <View
              style={styles.descriptionView}>
              <Text
                style={styles.condition}>
                {this.props.condition}
              </Text>
              <Text
                style={styles.descriptionModal}>
                {this.props.description}
              </Text>
              <ButtonPrimary
                onPress={() => Linking.openURL(`mailto:${this.props.email}?subject=Troc : ${this.props.title}`) }
                title="Contacter"/>
            </View>
            <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => {
                         this.setModalVisible(!this.state.modalVisible);
            }}>
              <Image
                style={styles.closeSvg}
                source={require('../Assets/Images/close.png')}
                {...this.props}
              />
            </TouchableOpacity>
          </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create ({
  containerCard: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 20,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  closeSvg: {
    width: 20,
    height: 20,
  },
  categorie: {
    marginBottom: 20,
    color: '#FA7268',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  modal: {
    position: 'relative',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 1,
    borderWidth: 20,
    borderColor: 'rgba(0,0,0,0.4)',
  },
  categorieModal: {
    fontSize: 15,
    color: '#FA7268',
    alignSelf: 'flex-start',
  },
  titleModal: {
    fontSize: 30,
    paddingRight: 35,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  wrapperLocation: {
    flexDirection: 'row',
    marginBottom: -30,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  locationImg: {
    width: 18,
    height: 18,
    marginRight: 5,
    resizeMode:'contain',
  },
  owner: {
    alignSelf: 'flex-end',
  },
  evaluation: {
    width: '100%',
    height: 20,
    resizeMode:'contain',
  },
  imgModal: {
    width: '80%',
    height: 250,
    marginVertical: 10,
  },
  descriptionView: {
    marginTop: -40,
    flex: 0.5,
  },
  descriptionModal: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  condition: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
});

export default ModalObject
