'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  WebView,
} = React;

var TuringApplication = React.createClass({
  getInitialState: function() {
    return {activeButton: 'today'}
  },

  handlePress: function(button) {
    this.setState({activeButton: button})
  },

  render: function() {
    var buttonValues = [{arg: 'today', text: 'Today'}, {arg: 'mod1', text: 'Module 1'}, {arg: 'mod2', text: 'Module 2'}, {arg: 'mod3', text: 'Module 3'}, {arg: 'mod4', text: 'Module 4'}]
    var navButtons = buttonValues.map(function(obj, i){
      return (
        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress.bind(null, obj.arg)}
          key={i}
        >
          <Text style={styles.buttonText}>{obj.text}</Text>
        </TouchableHighlight>
      )
    }.bind(this));

    var view;

    switch (this.state.activeButton) {
      // case 'today':
      // view = <WebView source={{uri:"http://today.turing.io"}}/>
      //   break;
      case 'mod1':
      view = <Text>This is the mod1 view</Text>
        break;
      case 'mod2':
      view = <Text>This is the mod2 view</Text>
        break;
      case 'mod3':
      view = <Text>This is the mod3 view</Text>
        break;
      case 'mod4':
      view = <Text>This is the mod4 view</Text>
        break;
    }

    return (
      <View style={styles.container}>

        {navButtons}

        {view}

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('TuringApplication', () => TuringApplication);

module.exports = TuringApplication;
