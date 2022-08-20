
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import First from './screens/first'
import Second from './screens/second'
import Third from './screens/third'
import Fourth from './screens/fourth'


const Tab = createBottomTabNavigator();

    const Tabs =()=>{
    return(
            <Tab.Navigator>
            <Tab.Screen name ="First Act" component ={First}/>
            <Tab.Screen name ="Second Act" component ={Second}/>
            <Tab.Screen name ="Third Act" component ={Third}/>
            <Tab.Screen name ="fourth act" component ={Fourth}/>
            </Tab.Navigator>
       
    );
}
export default Tabs;
