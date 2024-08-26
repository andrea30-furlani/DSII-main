import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/component/StackerNavigator';
// import StackNavigator from './src/component/StackerNavigator';


export default function App() {
  return (
   <NavigationContainer>
      <StackNavigator user={null}/>
    </NavigationContainer>

  );
}


  

