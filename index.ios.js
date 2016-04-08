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

var ModuleView = React.createClass({
  render: function() {
      return(<Text>We have reached the module {this.props.module} view.</Text>)
  }
})

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
      case 'today':
      view = <WebView source={{uri:"http://today.turing.io"}}/>
        break;
      case 'mod1':
      view = <ModuleView module="1"/>
        break;
      case 'mod2':
      view = <ModuleView module="2"/>
        break;
      case 'mod3':
      view = <ModuleView module="3"/>
        break;
      case 'mod4':
      view = <ModuleView module="4"/>
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
    flexDirection: 'column',
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
