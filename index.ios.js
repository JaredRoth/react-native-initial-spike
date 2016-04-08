/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Vibration,
  View,
  WebView
} from 'react-native';

class TuringApplication extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Wowowowwow',
      currentTime: '12:00 PM',
    };
  }

  componentDidMount() {
    this.updateTime();
    setInterval(this.updateTime.bind(this), 1000);
  }

  handleButtonPress() {
    Vibration.vibrate();
    alert(`Here is the title ${this.state.title}`);
  }

  handleTitleChange(text) {
    this.setState({ title: text });
  }

  updateTime() {
    this.setState({ currentTime: (new Date().toString()) });
  }

  onNavigationStateChange(navState) {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.title}
        </Text>
        <Text>
          The time is {this.state.currentTime}.
        </Text>
        <TouchableHighlight style={styles.button} onPress={this.handleButtonPress.bind(this)}>
          <Text style={styles.buttonText}>I should just be called button!</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleTitleChange.bind(this)}
          value={this.state.title}
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View>
          <WebView html="<h1>Hello world!</h1>"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  webView: {
    backgroundColor: '#F00',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 7,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TuringApplication', () => TuringApplication);
