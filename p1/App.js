
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import AppTab from './src/components/AppTab';
import { NavigationContainer } from '@react-navigation/native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64;

export default function App() {
  return (
      <View style={styles.container}>
      <NavigationContainer >
        <AppTab />
      </NavigationContainer>      
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: statusBar,  
    backgroundColor: '#00AF8B',
    width: 412,
    height: 870,
  }
})
