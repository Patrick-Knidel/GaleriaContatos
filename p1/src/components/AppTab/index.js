import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import ListaContatos from "../ListaContatos";
import ListaFavoritos from "../ListaFavoritos";
import NovoContato from "../NovoContato";
import VisualizarContato from "../VisualizarContato";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#7Bffe4",
        tabBarInactiveBackgroundColor: "#0B866C",
        tabBarInactiveTintColor: "#7Bffe4",
        tabBarActiveTintColor: "#0B866C",
        headerShown: false,
    }}
    >
    <Tab.Screen
      name="Contatos"
      component={ListaContatos}
      options={{
        headerStyle: {
          backgroundColor: "#0B866C",
        },
        headerTintColor: "#FFF",
        headerTitleAlign: 'center',
        tabBarIcon: (size, color) => (
          <Image source={require('p1/image/contato.png')} />
        )
      }}
    />
    <Tab.Screen
      name="Favoritos"
      component={ListaFavoritos}
      options={{
        headerStyle: {
          backgroundColor: "#0B866C",
        },
        headerTintColor: "#FFF",
        headerTitleAlign: 'center',
        tabBarIcon: (size, color) => (
          <Image source={require('p1/image/favorito.png')} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default function AppTab() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Contatos"
            component={Tabs}
          />

          <Stack.Screen 
            name="NovoContato"
            component={NovoContato}
          />   

          <Stack.Screen 
            name="VisualizarContato"
            component={VisualizarContato}
          /> 

        </Stack.Navigator>
      </NavigationContainer>
    )
}


