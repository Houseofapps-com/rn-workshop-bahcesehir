import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const CharacterCard = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={ ()=>props.goToDetail(props.character) } >
      <Image
        style={styles.image}
        source={{
          uri: `${props.character.thumbnail.path}.${props.character.thumbnail.extension}`
        }}
      />
      <Text style={styles.text} >{props.character.name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 130,
    borderBottomWidth: 1,
    borderColor: "black",
    position:'relative'
  },
  image: {
    width,
    height: 130
  },
  text:{
    position:'absolute',
    right:10,
    top:10,
    fontSize:16,
    padding:5,
    fontWeight:'bold'
  }
});

export default CharacterCard;
