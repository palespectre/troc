import React from "react";
import SearchInput from '../Components/SearchInput';
import ButtonSecondary from '../Components/ButtonSecondary';
import UsersMap from '../Components/UsersMap';
import { AppRegistry, TextInput, Alert, TouchableOpacity, StyleSheet, Button, View, Text, Image } from "react-native";

class MapScreen extends React.Component {

  state = {
    userLocation: null
  };

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          }
        });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000 }
    );
  }

  render() {
    return (
      <View style={styles.viewMap}>
        <UsersMap userLocation={this.state.userLocation}/>
        <TouchableOpacity
          onPress={this.getUserLocation}
          style={styles.btn}>
          <Image
            style={styles.locationImg}
            source={require('../Assets/Images/aroundMe.png')}
          />
          <Text
            style={styles.txtBtn}>Autour de moi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 btn: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: 'rgba(255,255,255,1)',
   zIndex: 10,
   borderRadius: 50,
   paddingHorizontal: 20,
   paddingVertical: 15,
   position: 'absolute',
   top: 25,
   marginLeft: 0,
   marginRight: 0,
 },
 txtBtn: {
   fontSize: 16,
 },
 viewMap: {
   flex: 1,
   flexDirection: 'row',
   alignItems: "flex-end",
   justifyContent: "center",
   paddingBottom: 30,
 },
 locationImg: {
   width: 13,
   height: 13,
   marginRight: 10,
   resizeMode:'contain',
 },
});

export default MapScreen;
