import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Topbar from '../components/TopBar';

export default function TelaFeed() {

    return(
      <View style={styles.center}>
        <Topbar/>
        <Text> Feed </Text>
      </View>
    );


}

const styles = StyleSheet.create({
  center:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    backgroundColor:'E5E5E5',
    padding:10,
  },
 
  });