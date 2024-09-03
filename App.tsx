// import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext from './src/context/auth';
// import StackNavigator from './src/component/StackerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{user:null}}>
        <Routers />

      </AuthContext.Provider>
    </NavigationContainer>

  );
}




