//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity,Image } from 'react-native';

const { width, height } = Dimensions.get("screen");

// create a component
class ComicCard extends Component { 
    render() {
        const { comic } = this.props;
        return (
            <TouchableOpacity style={styles.container}>
              <View>  
                <Image resizeMode="stretch" style={styles.image} source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` }}/>
              </View> 
              <View style={styles.textContainer} >
                <View><Text style={styles.title} >{comic.title}</Text></View>
                <View><Text style={styles.description} numberOfLines={5} ellipsizeMode={ 'tail' } >{comic.description}</Text></View>
              </View>    
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width,
        height:150,
        marginBottom:10,
        flexDirection:'row',
        padding:10,
        position:'relative'
    },
    image:{
        width:80,
        height:140
    },
    textContainer:{
        flex:1,
        paddingLeft:10,
        flexDirection:'column',
    },
    title:{
        paddingBottom:10,
        fontWeight:'bold',
    },
    description:{
    }
});

//make this component available to the app
export default ComicCard;
