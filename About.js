import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  Image,
  TouchableHighlight,
  Linking
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection:'column'      
  },
  description: {
    color:'white',
    fontSize: 15,
    backgroundColor: 'transparent',
    paddingTop:185,
    textAlign: 'center',
  },
  email: {
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    paddingTop:20,
    textAlign: 'center',
  },
  phone: {
    color:'white',
    fontSize: 16,
    fontWeight:'bold',
    backgroundColor: 'transparent',
    paddingTop:5,
    textAlign: 'center',
  }
});
 
class About extends Component {
    render() {
      return (
        <Image source={require('./Assets/pitch.jpg')} style={styles.container}> 
          <Text style={styles.description}>
            SoccerOnTV was created as my final project for the CodeCore Bootcamp using
            React Native, JavaScript and Gifted Messenger (iPhone App) + Ruby on Rails and PostgreSQL (Backend). 
	      </Text>
          <TouchableHighlight 
            onPress={() => Linking.openURL('https://ca.linkedin.com/in/ffoger')}>
              <Image 
                source={require("./Assets/LI.png")} 
                style={{height:50, width:53}} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => Linking.openURL('https://github.com/ffoger')}>
              <Image 
                source={require("./Assets/GH.png")} 
                style={{height:50, width:50}} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => Linking.openURL('https://codecore.ca/')}>
              <Image 
                source={require("./Assets/CC.jpeg")} 
                style={{height:50, width:50}} />
          </TouchableHighlight>
          <Text style={styles.email}>
            fernando.foger@live.com 
	      </Text>
          <Text style={styles.phone}>
            +1 778-866-5171 
	      </Text>
        </Image>
      );
    }
}
 
module.exports = About;