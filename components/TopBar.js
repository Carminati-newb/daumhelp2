import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function TopBar() {

    return(
      <View style={styles.center}>

        <View style={styles.topTypo}>
        <Image style={styles.imgTypo} source={require('../assets/typo.png')}/>
        </View>
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

  topTypo:{
    position:'absolute',
    zIndex:1,
    top:-11,
    backgroundColor:'#38C7A5',
    width: "1500%",
    alignItems:"center",
    padding: 7
  },

  imgTypo:{
    width:130,
    height:30,
    
  }

 
  });