import * as React from 'react';
import { Image, Text, StyleSheet, View, Pressable } from 'react-native';

export default function BoxOrg(props) {
  return (
    <View style={styles.position}>
      <Pressable style={styles.btn}>
        <Image style={styles.foto} source={props.imgOrg} />
        <View style={styles.txts}>
          <Text tyle={styles.escritos} style={styles.nomeOrg}>{props.nomeOrg}</Text>
          <Text style={styles.descOrg}> {props.descOrg} </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  escritos: {
    display: 'flex',
    flexDirection: 'collum',
  },

  btn: {
    top: '0',
    left: '0',
    marginTop: '2.5vh',
    backgroundColor: '#FFFEF3',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '90vw',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingRight: '20px',
    paddingLeft: '5px',
    paddingTop: '10px',
    paddingBottom: '5px',
    zIndex: 2,
  },

  nomeOrg: {
    color: '#1E1B1B',
    fontSize: '22px',
    fontWeight: '600',
    textAlign: 'left',
    maxWidth: '60vw',
    marginBottom: '5px',
  },

  descOrg: {
    fontSize: '12px',
    fontColor: '#434242',
    textAlign: 'left',
    maxWidth: '60vw',
  },

  foto: {
    maxWidth: '80px',
    maxHeight: '80px',
    borderRadius: '8px',
  },

  position: {
    zIndex: 0,
  },

  txts:{

    marginLeft:'10px'

  }
});
