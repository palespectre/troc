import React from "react";
import { Button, View, Image, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from "react-native"
import t from 'tcomb-form-native'
import ButtonPrimary from '../Components/ButtonPrimary'
import ImageFactory from 'react-native-image-picker-form'
import { StackNavigator } from 'react-navigation'

class AddScreen extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  handleSubmit = () => {
    const results = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', results);

    if (results) {
      this.setModalVisible(!this.state.modalVisible);
    }
  }

  goToList = () => {
    this.props.navigation.navigate('Liste');
    this.setModalVisible(!this.state.modalVisible);
  }

  render() {

    // categories
    const Category = t.enums({
      Vetement: 'Vêtement',
      Livre: 'Livre',
      Multimedia: 'Multimedia',
      Mobilier: 'Mobilier',
      Vehicule: 'Véhicule',
      Service: 'Service',
      Mobilier: 'Musique',
    });

    // default values
    const value = {
      category: 'Vetement',
      condition: 'Neuf',
    };

    // conditions
    const Condition = t.enums({
      Neuf: 'Neuf',
      TBE: 'Très bon état',
      BE: 'Bon état',
      Abime: 'Abimé',
    });

    const NewObject = t.struct({
      photo: t.String,
      title: t.String,
      condition: Condition,
      description: t.String,
      category: Category,
      location: t.String
    });

    // initialize the form
    const Form = t.form.Form;

    // pass options to form
    const Options = {
      fields: {
        photo: {
          config: {
            title: 'Choisir une photo',
            options: ['Prendre une nouvelle photo', 'Sélectionner une photo depuis la galerie d\'images', 'Annuler'],
            // Used on Android to style BottomSheet
            style: {
            }
          },
          error: 'No image provided',
          factory: ImageFactory
        },
        title: {
          label: 'Titre',
          help: 'Préférez un titre court et efficace',
          error: 'Ce champ est obligatoire.',
        },
        condition: {
          label: 'Etat',
        },
        description: {

        },
        category: {
          label: 'Catégorie',
          error: 'Ce champ est obligatoire.'
        },
        location: {
          label: 'Lieu',
          error: 'Ce champ est obligatoire.'
        },
      },
    };
    return (
      <View
        style={styles.container}>
        <Modal
          transparent = {true}
          style={styles.modalWrapper}
          visible={this.state.modalVisible}>
          <View
            style={styles.modal}>
            <Image
              style={styles.confirmation}
              source={require('../Assets/Images/bravo.png')}
            />
            <Text
              style={styles.textConfirmation}>Troc ajouté !</Text>
            <Text
              style={styles.descriptionConfirmation}>Votre troc a bien été ajouté à la liste. Merci de votre contribution !</Text>
            <ButtonPrimary
              title="Voir les trocs"
              onPress={ this.goToList }
            />
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
        <ScrollView style={styles.scrollView}>
          <Text
            style={styles.title}>
            Ajouter un troc
          </Text>
          <Image
            style={styles.headerImg}
            source={require('../Assets/Images/addTroc.png')}
          />
          <View
            style={styles.formWrapper}>
            <Form
              ref= { c => this._form = c }
              type= { NewObject }
              value= { value }
              options= { Options } />
            <View
              style={styles.wrapperBtn}>
              <ButtonPrimary
                title="Ajouter"
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: '#f3f2f2',
  },
  title: {
    position: 'absolute',
    top: 56,
    left: 40,
    width: 140,
    lineHeight: 40,
    zIndex: 1,
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  headerImg: {
    marginTop: -5,
    width: '101%',
    height: 240,
    resizeMode:'contain',
  },
  scrollView: {
    width: "100%",
  },
  formWrapper: {
    paddingHorizontal: 20,
  },
  wrapperBtn: {
    marginBottom: 40,
  },
  modalWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
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
  confirmation: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  textConfirmation: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
  descriptionConfirmation: {
    flexWrap: 'wrap',
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 40,
    fontSize: 17,
    lineHeight: 25,
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
});


export default AddScreen;
