import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import Axios from "axios";
import { form } from 'react';

export default function TelaCadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [verifSenha, setVerifSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nomeDoador, setNomeDoador] = useState();
  const [telefone, setTelefone] = useState();


  /*const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };*/


  function cadastraUser() {
    async function cadastro() {
      try {
        const resultado = await Axios.post("https://da-um-help.glitch.me/registerUser", {
          EmailDoador: email,
          NomeDoador: nomeDoador,
          idade: dataNascimento,
          CPF: cpf,
          Telefone: telefone,
          Senha: senha,
        })

        const { data } = resultado

        console.log(data)
      } catch (e) {
        console.log(e.response.data)
      }

    }

    cadastro()
  }


  return (

    <View style={styles.center}>


      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          id="emailDoador"
          name="emailDoador"
          placeholder="Informe seu E-mail"
          type="text"
          onChangeText={value => setEmail(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          id="nomeDoador"
          name="nomeDoador"
          placeholder="Informe seu Nome"
          type="text"
          onChangeText={value => setNomeDoador(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          placeholder="Insira sua senha"
          id="senha"
          name="senha"
          type="password"
          onChangeText={value => setSenha(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Repita sua senha"
          keyboardType="password"
          onChangeText={value => setVerifSenha(value)}
        >
        </TextInput>
      </View>


      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe seu cpf"
          keyboardType="text"
          onChangeText={value => setCpf(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe sua data de nascimento"
          keyboardType="text"
          onChangeText={value => setDataNascimento(value)}
        >
        </TextInput>
      </View>
      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe seu Telefone"
          keyboardType="text"
          onChangeText={value => setTelefone(value)}
        >
        </TextInput>
      </View>

      <TouchableOpacity style={styles.btnCadastro} onPress={() => {
        cadastraUser(); navigation.navigate("Tabs")
      }}>
        <Text style={styles.btnTxt}>Cadastra-se</Text>
      </TouchableOpacity>


    </View>
  );
}



const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'E5E5E5',
    padding: 10,
  },

  inputbox: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F5F4F4',
    borderRadius: 25,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10
  },

  logo: {

    height: 250,
    width: 250,
    marginBottom: 30
  },

  btnTxt: {
    fontSize: 30,
    whiteSpace: 'nowrap',
    color: '#FFFFFF',

  },

  btnCadastro: {
    paddingHorizontal: 65,
    paddingVertical: 13,
    backgroundColor: '#38C7A5',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 15

  },

  txtInput: {

    marginVertical: 10,
    border: 0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width: 265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor: 'red'


  },



});