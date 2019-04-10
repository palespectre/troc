import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import Carousel from 'react-native-carousel-control'
import { Categories } from '../Categories'
import { Subscribe } from 'unstated'
import { ListeScreen, ListeState } from '../Screens/ListeScreen'

class CategoriesBar extends React.Component {
  selectedSource (category) {
    if (category.isSelected) {
      return category.iconSelected;
    }
    return category.icon;
  }

  render () {
    return (
      <Subscribe to={[ListeState]}>
        {list => (
          <View
            style={styles.bar}>
            <Carousel
              pageStyle={{}}
              sneak={289}>
              { this.props.categories.map((categorie, i) =>
                <View
                  style={styles.btnWrapper}
                  key={i}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={ () => {
                      list.filterObjects(categorie.id);
                    }
                    }>
                    <View
                      style={styles.iconWrapper, [categorie.isSelected ? {backgroundColor: 'rgba(0,0,0,0.5)'} : {backgroundColor: 'white'},
                        {borderRadius: 50,
                          width: "100%",
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center"}
                      ]}>
                      <Image
                        source={this.selectedSource(categorie)}
                        style={styles.icon}
                      />
                    </View>
                    <Text
                      style={styles.label}>{categorie.title}</Text>
                  </TouchableOpacity>
                </View>
                )}
            </Carousel>
            <Image
              style={styles.headerImg}
              source={require('../Assets/Images/categoriesHeader.png')}
            />
          </View>
        )}
      </Subscribe>
    )
  }
}

const styles = StyleSheet.create ({
  btnWrapper: {
    alignItems: "flex-start",
  },
  btn: {
    width: 62,
    height: 62,
  },
  headerImg: {
    position: 'absolute',
    top: 0,
    marginTop: -5,
    width: '101%',
    height: 130,
    resizeMode:'contain',
    zIndex: -1,
  },
  bar: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 110,
    marginTop: -15,
    width: "100%",
  },
  label: {
    color: "white",
    marginTop: 3,
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
  icon: {
    width: "65%",
    height: "65%",
  },
});

export default CategoriesBar
