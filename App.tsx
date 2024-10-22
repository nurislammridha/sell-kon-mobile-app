/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import Pages from './pages/pages';
import { Text, View } from 'react-native';
import Pages from './pages/Home';
import AllComponents from './pages/AllComponents';
import Details from './pages/Details';
const App = () => {

  return (
    <View>
      {/* <Pages /> */}
      {/* <AllComponents /> */}
      <Details />
    </View>
  );
}
export default App;
