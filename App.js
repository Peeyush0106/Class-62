import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Header } from "react-native-elements"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
//import Header from "./components/Header";

/*
Weather photo

https://media0.giphy.com/media/fwR54Wq7dYu9VXKiAF/source.gif

*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: ""
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url).then(response => response.json()).then(responseJson => {
      this.setState({
        weather: responseJson
      });
    }).catch(error => {
      console.error(error);
    });
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{ text: 'Weather Forecasting App', style: { color: '#fff' } }}
          />
          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Image source="https://media0.giphy.com/media/fwR54Wq7dYu9VXKiAF/source.gif" style={{ width: 200, height: 200 }} />
          </View>

          <View>
            <Text>
              {
                this.state.weather.main.temp
              }
              &deg;C
            </Text>
            <Text>
              {
                this.state.weather.main.humidity
              }
            </Text>
            <Text>
              {
                this.state.weather.description
              }
            </Text>
          </View>

        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
});
