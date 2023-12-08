import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { dim } from './src/constants';
import { Route } from './src/navigation/Route';

function App() {
  return (
    <Route />
  );
}

const styles = StyleSheet.create({
main:{
  flex:1,
  justifyContent:'center',
  alignItems:'center', 
},
menu:{
  height:dim.height*.2,
  width:dim.width,
  backgroundColor:'red', 
  }
});

export default App;
