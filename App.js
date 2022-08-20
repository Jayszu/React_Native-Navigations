import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/MainContainer';


const App=()=>{
  return(
  <NavigationContainer>
    <Tabs/>
  </NavigationContainer>
  );
}
export default App;