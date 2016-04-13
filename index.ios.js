'use strict';

// var scraperjs = require('scraperjs');
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
    // let scraper = scraperjs.StaticScraper.create('http://today.turing.io/outlines/2016-04-08/')
    //     .scrape(function($) {
    //         return $("{this.props.section}").nextUntil("{this.props.nextSection}").map(function() {
    //           return $(this).html();
    //         });
    //     })
    let html = "let's try this"
    return(<Text>{html}</Text>)
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
    var buttonValues = [{arg: 'today', text: 'Today'}, {arg: 'mod1', text: 'Mod 1'}, {arg: 'mod2', text: 'Mod 2'}, {arg: 'mod3', text: 'Mod 3'}, {arg: 'mod4', text: 'Mod 4'}]
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


    var today = new Date;
    var time = today.toISOString().split('T')[0]

    var view;

    switch (this.state.activeButton) {
      case 'today':
      view = <WebView source={{uri:"http://today.turing.io/outlines/"+ time +"/"}}/>
        break;
      case 'mod1':
      view = <WebView source={{uri:"http://today.turing.io/outlines/"+ time +"/#section-3"}}/>
        break;
      case 'mod2':
      view = <WebView source={{uri:"http://today.turing.io/outlines/"+ time +"/#section-2"}}/>
        break;
      case 'mod3':
      view = <WebView source={{uri:"http://today.turing.io/outlines/"+ time +"/#section-1"}}/>
        break;
      case 'mod4':
      view = <WebView source={{uri:"http://today.turing.io/outlines/"+ time +"/#section"}}/>
        break;
    }

    return (
      <View style={styles.container}>

        <View style={styles.nav}>{navButtons}</View>

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
  button: {
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: '#48BBEC',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  nav: {
    marginTop: 20,
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('TuringApplication', () => TuringApplication);

module.exports = TuringApplication;
