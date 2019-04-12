import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Rate from '../Components/Rate'
import CardSmall from '../Components/CardSmall'

class AccountScreen extends React.Component {

  render() {
    return (
    <ScrollView style={styles.scrollView}>
      <View
        style={styles.container}>
        <Image
          style={styles.image}
          source={require('../Assets/Images/moi.jpg')}
        />
          <View
            style={styles.personalInfos}>
            <Text
              style={styles.name}>Pierre Cormier</Text>
            <Text
              style={styles.presentation}>J'échange surtout des livres et vêtements. N'hésitez pas à me contacter!</Text>
          </View>
          <View
            style={styles.infoWrapper}>
            <View
              style={styles.lineWrapper}>
              <Icon
                style={styles.icon}
                name="md-mail"
                size={30}
                color="#9a9a9a" />
              <Text
                style={styles.font}>cormierpierre@gmail.com</Text>
            </View>
            <View
              style={styles.lineWrapper}>
              <Icon
                style={styles.icon}
                name="md-home"
                size={30}
                color="#9a9a9a" />
              <Text
                style={styles.font}>15 rue du roi Albert, 44000 Nantes</Text>
            </View>
          </View>
          <View
            style={styles.ratesWrapper}>
            <Rate
              color={true}
              photo={require('../Assets/Images/elisabeth.jpg')}
              name="Elisabeth"
              description="Très bon échange avec Pierre. Précis et ponctuel. Je recommande !"/>
            <Rate
              color={false}
              photo={require('../Assets/Images/shields.jpg')}
              style={styles.white}
              name="Eric"
              description="Objet en très bon état, identique à l'annonce. Le troc s'est très bien déroulé."/>
            <Rate
              color={true}
              photo={require('../Assets/Images/marguerite.jpg')}
              style={styles.white}
              name="Marguerite"
              description="Je suis très satisfaite de cet échange. Merci encore ! A très bientôt j'espère"/>
          </View>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: '#efefef',
  },
  scrollView: {
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginRight: 15,
    resizeMode:'contain',
  },
  personalInfos: {
    backgroundColor: 'white',
    height: 260,
    width: '90%',
    marginTop: -100,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1,
  },
  name: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  presentation: {
    fontSize: 16,
    lineHeight: 22,
  },
  font: {
    fontSize: 16,
  },
  infoWrapper: {
    padding: 30,
    borderRadius: 10,
    marginTop: 18,
    width: '90%',
    backgroundColor: 'white',
  },
  lineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  ratesWrapper: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 18,
  },
  cardsWrapper: {
    marginTop: 18,
    width: '95%',
  },
  icon: {
    marginRight: 15,
  }
});


export default AccountScreen;
