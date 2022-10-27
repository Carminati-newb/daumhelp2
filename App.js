import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/TelaLogin';
import Cadastro from './pages/TelaCadastro';
import Feed from './pages/TelaFeed';
import Pesquisa from './pages/TelaPesquisa';
import Notificaçao from './pages/TelaNotificação'
import Perfil from './pages/TelaPerfil';
import Tabs from './pages/tabs';
import CadastroOrg from './pages/TelaCadastroOrg'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <>

    <NavigationContainer>

      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "CadastroOrg" component = {CadastroOrg}/>
        <Stack.Screen name = "Tabs" component = {Tabs}/>

      </Stack.Navigator>




    </NavigationContainer>
    </>
  );
}