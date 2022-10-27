import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image, ScrollView } from 'react-native';



export default function TelaCadastro({navigation}) {

  return (

    <View style={styles.center}>
      <ScrollView>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe o Nome da Organização"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe o CNPJ da Organização"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe o CPF do responsável pela Organização"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu email"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

        <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua cidade"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu Bairro"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe sua Rua, Número e Complemento"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua UF"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu CEP"
                  keyboardType="text"
                  >
              </TextInput>
      </View>
    
      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua senha"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Repita sua senha"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Tabs")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>


 </ScrollView>
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

  inputbox:{
    paddingHorizontal:20,
    paddingVertical:8,
    backgroundColor:'#F5F4F4',
    borderRadius:25,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom:10
  },

  

  logo:{

    height:250,
    width:250,
    marginBottom:30
  },

  btnTxt:{
    fontSize:30,
    whiteSpace:'nowrap',
    color:'#FFFFFF',
    
  },

  btnCadastro:{
    paddingHorizontal:65,
    paddingVertical:13,
    backgroundColor:'#38C7A5',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop:15
  
  },

  txtInput:{

    marginVertical:10,
    border:0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width:265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor:'red' 
  },

  txtInputgrande:{

    marginVertical:10,
    border:0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width:265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor:'red',
    fontSize:12
  },


  
  });