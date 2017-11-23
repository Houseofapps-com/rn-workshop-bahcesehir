import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

export default class TabIcon extends Component {
  render() {
    const { icon, tintColor } = this.props;

    return (
      <Image
        source={ icon }
        style={ [ styles.icon, { tintColor } ] }
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
});
