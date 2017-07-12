import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import Camera from 'react-native-camera';

export default class camerahere extends Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      lastCapture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY7W8W3EfSgrsrmlmnAE3cvRYrP4N7u4wbC6YlCQhgqCBY7Y",
    };
  }

  clickedme() {

    this.camera.capture()
    .then((data) => {
      alert("Resim Url: " + data.mediaUri);
      this.setState({ lastCapture: data.mediaUri });
      console.log(data);
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            style={{
              alignSelf: 'center',
              height: 150,
              width: 150,
              borderWidth: 1,
              borderRadius: 75
            }}
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY7W8W3EfSgrsrmlmnAE3cvRYrP4N7u4wbC6YlCQhgqCBY7Y"}}
            resizeMode="stretch"
          />
          <Text>{this.state.lastCapture}</Text>
          </View>
        <View style={styles.img}>
          <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          >
            <TouchableHighlight onPress={this.clickedme.bind(this)} >
              <View style={{height:50,width:50,backgroundColor:'pink',}}></View>
            </TouchableHighlight>
          </Camera>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});

AppRegistry.registerComponent('camerahere', () => camerahere);
