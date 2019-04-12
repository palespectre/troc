import React from 'react'
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Linking } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import Carousel from "react-native-carousel-control"
import geolib from 'geolib'

class CardSmall extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render () {
    return (
      <View style={styles.containerCard}>
        <Modal
          transparent = {true}
          style={styles.modalWrapper}
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
                    <Text
                      style={styles.locationTxt}>
                      {this.props.distance}
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
                  source={this.props.imgModal1}
                  {...this.props}
                />
                <Image
                  style={styles.imgModal}
                  source={this.props.imgModal2}
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
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
        }}>
          <Image
            source={this.props.imgCard}
            style={styles.image}
            {...this.props}
          />
          <View
            style={styles.infoWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.categorie}>{this.props.categorie}</Text>
            <View
              style={styles.wrapperLocation}>
              <View
                style={styles.row}>
                <Image
                  style={styles.locationImg}
                  source={require('../Assets/Images/location.png')}
                />
                <Text
                  style={styles.locationTxt}>
                  {this.props.distance}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  containerCard: {
    width: '100%',
    backgroundColor: '#efefef',
  },
  row: {
    flexDirection: 'row',
  },
  modalWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 15,
    borderRadius: 5,
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
  infoWrapper: {
    paddingVertical: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 1,
  },
  categorie: {
    marginBottom: 15,
  },
  locationTxt: {
    color: '#FA7268',
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
    borderRadius: 5,
  },
  descriptionView: {
    marginTop: -40,
    flex: 0.5,
  },
  descriptionModal: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 30,
    lineHeight: 25,
  },
  condition: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginBottom: 5,
  },
});

export default CardSmall
