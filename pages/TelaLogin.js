import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TelaLogin({navigation}) {

  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.tit}> Bem vindo ao Da um Help </Text>
       
        <Text style={styles.txt}> Somos um portal para facilitar na comunicaçãoentre pessoas dispostas a fazer o bem assim como você, e organizações que precisam do nosso apoio para continuar com seus incríveis projetos! </Text>
        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Cadastro")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>
        <Pressable style={styles.btnGoogle}>
          <Text style={styles.btnTxtGoogle}>Logar com o Google</Text>
        </Pressable>
        <Pressable style={styles.btnFb}>
          <Text style={styles.btnTxtFb}>Logar com o Facebook</Text>
        </Pressable>

        <Text style={{color: 'purple', marginTop: 20}}
          onPress={()=>navigation.navigate("CadastroOrg")}>Se cadastre como Ong
        </Text>
        

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

  logo:{
    marginTop:35,
    height:250,
    width:250,
    marginBottom:35
  },

  tit:{
      fontSize:20,
      color:'#2C2828'
  },

  txt:{
    marginTop:10,
    fontSize:14,
    color:'#454343',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: '80%'

  },

  btnTxt:{
    fontSize:20,
    color:'#2C2828',
    
  },

  btnCadastro:{
    marginTop:20,
    paddingHorizontal:90,
    paddingVertical:9,
    backgroundColor:'#F4EFEF',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  

  },

    btnFb:{
    marginTop:20,
    paddingHorizontal:40,
    paddingVertical:12,
    backgroundColor:'#395185',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  

    btnTxtFb:{
    fontSize:20,
    color:'#F4EFEF',
    whiteSpace:'nowrap',
    textAlign:'right'

  },

    btnGoogle:{
    marginTop:20,
    paddingHorizontal:50,
    paddingVertical:12,
    backgroundColor:'#F4EFEF',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },

    btnTxtGoogle:{
    fontSize:20,
    color:'#2C2828',
    whiteSpace:'nowrap'

  },


  
  });
