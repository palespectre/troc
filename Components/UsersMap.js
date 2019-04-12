import React from 'react'
import MapView from 'react-native-maps' // remove PROVIDER_GOOGLE import if not using Google Maps
import Marker from 'react-native-maps'
import { View, StyleSheet, Image, Modal, TouchableOpacity, Text, Linking } from 'react-native'
import { Objects } from '../Objects'
import ButtonPrimary from './ButtonPrimary'
import Carousel from "react-native-carousel-control"

class UsersMap extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
    bottom: 1,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});

    // render googlemaps toolbar
    if(this.state.bottom === 1){
       this.setState({
         bottom: 0
       })
     }
  };

  render () {
    let userLocationMarker = null;
    if (this.props.userLocation) {
      userLocationMarker = <MapView.Marker coordinate={this.props.userLocation}>
                            <View style={styles.userMarker}/>
                          </MapView.Marker>
    }

    return (
        <View style={[styles.container, {paddingTop: this.state.statusBarHeight}]}>
          <MapView
            style={[styles.map, {bottom: this.state.bottom}]}
            initialRegion={{
              latitude: 47.218371,
              longitude: -1.553621,
              latitudeDelta: 0.055,
              longitudeDelta: 0.0521,
            }}
            region={this.props.userLocation}
            toolbarEnabled={true}
          >
          {userLocationMarker}
          { Objects.map((object, i) =>
            <View
              key={object.id}>
              <MapView.Marker
                  coordinate={{latitude: object.latitude, longitude:  object.longitude}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                <View style={styles.containerCard}>
                  <Modal
                    transparent = {true}
                    style={styles.absolute}
                    visible={this.state.modalVisible}>
                      <View
                        style={styles.modal}>
                        <View
                          style={styles.paddingHorizontal}>
                          <Text
                            style={styles.categorieModal}>
                            {object.categorie}
                          </Text>
                          <Text
                            style={styles.titleModal}>
                            {object.title}
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
                                {object.distance}
                              </Text>
                            </View>
                            <View>
                              <TouchableOpacity
                                  onPress={() => {
                              }}>
                                <Text
                                  style={ styles.owner }>
                                  { object.owner }
                                </Text>
                                <Image
                                  style={styles.evaluation}
                                  source={object.evaluationOwner}
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
                            source={object.img}
                          />
                          <Image
                            style={styles.imgModal}
                            source={object.img2}
                          />
                        </Carousel>
                        <View
                          style={styles.descriptionView}>
                          <Text
                            style={styles.condition}>
                            {object.condition}
                          </Text>
                          <Text
                            style={styles.descriptionModal}>
                            {object.description}
                          </Text>
                          <ButtonPrimary
                            onPress={() => Linking.openURL(`mailto:${object.email}?subject=Troc : ${object.title}`) }
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
                </View>
              </MapView.Marker>
            </View>
            )}
        </MapView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
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
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
  },
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 630,
   width: '100%',
   justifyContent: 'center',
   alignItems: 'center',
   zIndex: -1,
 },
 userMarker: {
  width: 45,
  height: 45,
  borderRadius: 50,
  backgroundColor: '#4285F6',
  borderWidth: 15,
  borderColor: 'rgba(0,0,0,0.1)',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
   zIndex: -1,
 },
});

export default UsersMap;
