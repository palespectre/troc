import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Rate from '../Components/Rate'
import CardSmall from '../Components/CardSmall'
import { MyObjects } from '../MyObjects'

class AccountScreen extends React.Component {

  state = {
    myObjects: MyObjects,
  }

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
            style={styles.greyContainer}>
            <Text
              style={styles.name}>Pierre Cormier</Text>
            <Text
              style={styles.presentation}>Lorem ipsum dolor sit amet, consec adipis elit. Lautem unde odio!</Text>
          </View>
          <View
            style={styles.infoWrapper}>
            <View
              style={styles.lineWrapper}>
              <Icon
                style={styles.icon}
                name="md-mail"
                size={30}
                color="#4F8EF7" />
              <Text>cormierpierre@gmail.com</Text>
            </View>
            <View
              style={styles.lineWrapper}>
              <Icon
                style={styles.icon}
                name="md-home"
                size={30}
                color="#4F8EF7" />
              <Text>15 rue du roi Albert, 44000 Nantes</Text>
            </View>
          </View>
          <Rate
            color={true}
            name="Elisabeth"
            description="Très bonne échange avec Pierre. Précis et ponctuel. Je recommande !"/>
          <Rate
            color={false}
            style={styles.white}
            name="Eric"
            description="Objet en très bon état, identique à l'annonce. Le troc s'est très bien déorulé."/>
          <Rate
            color={true}
            style={styles.white}
            name="Marguerite"
            description="Je suis très satisfaite de cet échange. Merci encore ! A très bientôt j'espère"/>
          </View>
          { this.state.myObjects.map(object => (
            <CardSmall
              categorie={object.categorie}
              title={object.title}
              longitude={object.longitude}
              owner={object.owner}
              email={object.email}
              evaluation={object.evaluationOwner}
              imgCard={object.img}
              imgModal={object.img}
              condition={object.condition}
              description={object.description}
              key={object.id}/>
            ))}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginRight: 15,
    resizeMode:'contain',
    zIndex: 1,
  },
  greyContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    height: 260,
    width: '90%',
    marginTop: -100,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  infoWrapper: {
    paddingVertical: 40,
  },
  lineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    marginRight: 15,
  },
  scrollView: {
    width: "100%",
  }
});


export default AccountScreen;
