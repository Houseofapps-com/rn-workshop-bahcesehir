//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import API from "../utils/api";
import CharacterCard from "../components/characterCard";

// create a component
class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      characters: []
    };
  }

  componentDidMount() {
    API.getCharacters()
      .then(response => {
        this.setState({ loading: false, characters: response.data.results });
      })
      .catch(err => {
        this.setState({ loading: false, error: err });
      });
  }

  renderCharacters = () => {
    return (
      <FlatList
        data={this.state.characters}
        renderItem={({ item }) => <CharacterCard character={item} />}
        keyExtractor={item => item.id}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator /> : this.renderCharacters()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FfFfFf"
  }
});

//make this component available to the app
export default Home;
