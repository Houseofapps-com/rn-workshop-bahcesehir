//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  Animated
} from "react-native";
import API from "../utils/api";
import ComicCard from "../components/comicCard";

const { width, height } = Dimensions.get("screen");

// create a component
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: null,
      loading: true,
      animatedValue: new Animated.Value(0)
    };
  }
  

  componentDidMount() {
    const { navigation } = this.props;
    this.getComics(navigation.state.params.character.id);
  }

  getComics = id => {
    API.getComicsOfCharacterById( id , { orderBy: "-onsaleDate" })
      .then(res => {
        this.setState({
          comics: res.data.results,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, loading: false });
      });
  };

  renderComics = () => {
    const { comics } = this.state;
    return comics.map((comic, i) => {
      return <ComicCard key={i} comic={comic} />;
    });
  };

  render() {
    const { loading, comics, animatedValue } = this.state;
    const { navigation } = this.props;
    const character = navigation.state.params.character;
    console.log("character", character);
    console.log("comics", comics);

    const collapseInterpolate = this.state.animatedValue.interpolate({
      inputRange: [0, 250],
      outputRange: [300, 0],
      extrapolate: "clamp"
    })

    const opacityInterpolate = this.state.animatedValue.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0],
      extrapolate: "clamp"
    })
    
    const widthInterpolate = this.state.animatedValue.interpolate({
      inputRange: [0, 300],
      outputRange: [width, 0],
      extrapolate: "clamp"
    })

    const imageStyle = {
      height: collapseInterpolate,
      width:widthInterpolate,
      opacity: opacityInterpolate
    }
    return (
      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: animatedValue } } }
        ])}
      >
        <View style={styles.profile}>
          <View style={{alignItems:'center'}} >
            <Animated.Image
              resizeMode="cover"
              style={[styles.image,imageStyle]}
              source={{
                uri: `${character.thumbnail.path}.${character.thumbnail.extension}`
              }}
            />
          </View>
          {character.description !== "" &&
            <Text style={styles.description}>{character.description}</Text>}
        </View>
        <Text style={styles.sectionTitle}>Çizgi Romanlar</Text>
        <View style={styles.comics}>
          {loading ? <ActivityIndicator /> : this.renderComics()}
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profile: {},
  comicContainer: {
    padding: 10,
    alignItems:'center'
  },
  comics: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  description: {
    color: "white",
    backgroundColor: "black",
    padding: 10
  },
  sectionTitle: {
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16
  }
});

//make this component available to the app
export default Detail;
