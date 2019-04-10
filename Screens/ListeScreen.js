import React from "react";
import _ from "lodash";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardSmall from '../Components/CardSmall';
import ButtonPrimary from '../Components/ButtonPrimary';
import CategoriesBar from '../Components/CategoriesBar';
import { Objects } from '../Objects';
import { Categories } from '../Categories'
import { Container, Subscribe } from 'unstated';

class ListeState extends Container {

  state = {
    objects: Objects,
    filters: [],
    filtered: Objects,
  }

  constructor(props) {
    super(props);
    this.state.categories = Categories.map(category => ({
        ...category,
        isSelected: false,
      }))
    }

  setObjects(params) {
    this.setState({
      ...this.state,
      filtered: params,
    })
  };

  filterObjects(filter) {
    const idCat = this.state.categories.findIndex(category => category.id == filter);
    this.state.categories[idCat].isSelected = !this.state.categories[idCat].isSelected;

    const selectedCategories = this.state.categories.filter(cat => cat.isSelected);

    let filtered = [];
    this.state.objects.map(object => {
      let index = selectedCategories.findIndex(category => category.id == object.categorieId);
      if (index !== -1) {
        filtered.push(object);
      }
    })
    if (filtered.length <= 0) {
      this.setObjects(this.state.objects);
    } else {
      this.setObjects(filtered);
    }
  }
}

function ListeScreen () {
  return (
    <Subscribe to={[ListeState]}>
      {list => (
        <View style={styles.container}>
          <CategoriesBar
            categories={list.state.categories}/>
          <ScrollView style={styles.scrollView}>
          {list.state.filtered.map(object => (
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
              distance={object.distance}
              key={object.id}/>
            ))}
          </ScrollView>
        </View>
      )}
    </Subscribe>
  );

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollView: {
    width: "100%",
  }
});

const mapStateToProps = (state) => {
  return {
  favoritesFilm: state.favoritesFilm}
}

export { ListeScreen, ListeState };
