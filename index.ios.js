import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Featured = require('./Featured');
var Chat = require('./Chat');
var Ranking = require('./Ranking');
var About = require('./About');

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={require("./Assets/binocular.png")}
                    title="Featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'chat'}
                    icon={require("./Assets/message.png")}
                    title="Chat"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'chat'
                        });
                    }}>
                    <Chat/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'ranking'}
                    icon={require("./Assets/rank.png")}
                    title="Ranking"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'ranking'
                        });
                    }}>
                    <Ranking/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'about'}
                    icon={require("./Assets/man.png")}
                    title="About"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'about'
                        });
                    }}>
                    <About/>
                    </TabBarIOS.Item>
                </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('Project', () => Project);
