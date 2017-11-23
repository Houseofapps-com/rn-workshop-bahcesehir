//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button
} from "react-native";

const { width } = Dimensions.get("window");

// create a component

class SearchHeader extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  cancelSearch=()=>{
      this.setState({value:""}, ()=>{
          this.props.cancelSearch()
      })
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType="done"
          value={this.state.value}
          onChangeText={text => this.setState({ value: text })}
          laceholder="Search"
          onSubmitEditing={() => {
            onSubmit(this.state.value);
          }}
        />
        {this.state.value !== "" ? <Button title="Sil" onPress={ this.cancelSearch } /> : null}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 40,
    width,
    backgroundColor: "red",
    padding: 5,
    flexDirection: "row"
  },
  input: {
    width: "90%",
    height: 30,
    backgroundColor: "white",
    padding: 5
  },
  deleteButton: {
    position: "absolute",
    right: 10
  }
});

//make this component available to the app
export default SearchHeader;
