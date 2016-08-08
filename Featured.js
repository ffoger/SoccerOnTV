import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  StatusBar,
  View,
  Text,
  AlertIOS,
  Alert,
  ListView,
  RefreshControl,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
  listView: {
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  line1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 3
  },
  line2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 4
  },
  line3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 4
  },
  club: {
    fontWeight: 'bold',
  },
  chanel: {
    color: 'red'
  },
  dateTime: {
    color: 'navy',
    fontSize: 12
  },
  league: {
    fontStyle: 'italic',
    fontSize: 10
  }
});

class Featured extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        }),
        refreshing: false
      };
    }
    componentDidMount() {
       Alert.alert("SoccerOnTV", "Your ultimate destination for finding the best matches on Canadian TV.");
       this.getMatchesFromApiAsync();
    }
    getMatchesFromApiAsync() {
      return fetch('https://soccerontv.herokuapp.com/api/v1/matches')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseJson.matches)
          })
        })
        .catch((error) => {
          Alert.alert("Oops, something went wrong. Please try again later.");
      });
    }
    _onRefresh() {
      this.setState({refreshing: true});
      this.getMatchesFromApiAsync().then(() => {
        this.setState({refreshing: false});
      });
    }
    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image source={require("./Assets/blue.png")} style={styles.background} />
          <Text style={styles.toolbar}>Upcoming Matches on TV</Text>
          <ListView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
            dataSource={this.state.dataSource}
            renderRow={this.renderData.bind(this)}
            style={styles.listView}
            automaticallyAdjustContentInsets={false}
          />
        </View>
      );
    }
    renderData(data) {
      return (
        <View>
          <View style={styles.line1}>
            <Text style={styles.dateTime}>{data.date}</Text><Text style={styles.dateTime}> | </Text>
            <Text style={styles.dateTime}>{data.time}</Text><Text style={styles.dateTime}> | </Text>
            <TouchableHighlight onPress={() => {
                var info = "Chanel: " + data.chanel + "\n League: " + data.league +  "\n Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc loco tenere se Triarius non potuit. Et ille ridens: Video, inquit, quid agas."
                Alert.alert("Match Details", info);
              }}>
              <Image source={require('./Assets/Info2.png')}></Image>
            </TouchableHighlight>
          </View>
          <View style={styles.line2}>
            <Text style={styles.club}>{data.home}</Text><Text> vs </Text>
            <Text style={styles.club}>{data.away}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      );
   }
}

module.exports = Featured;
