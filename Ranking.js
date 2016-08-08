import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  Image,
  WebView,
  StatusBar
} from 'react-native';

var styles = StyleSheet.create({
  container: {  
    flex: 1,
    flexDirection: 'column',
  },
  toolbar: {
    backgroundColor:'transparent',
    paddingTop:30,
    paddingBottom:20,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  webview: {  
    marginTop:40,
    marginLeft:40
  },
});
 
class Ranking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
          />
        <Image source={require("./Assets/blue.png")} style={styles.background} />
        <Text style={styles.toolbar}>Club World Ranking</Text>   
        <WebView style={styles.webview} 
                 source={{uri: "http://www.clubworldranking.com/modules/sharing_widget.aspx?type=club&cult=en-US"}}/>
      </View>         
    );
  }
}
          
module.exports = Ranking;