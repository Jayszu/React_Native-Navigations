import * as React from 'react';
import {View, Text,Image, ScrollView, StyleSheet} from 'react-native';



const First=({navigation})=>{
    return(
      <ScrollView>
      <View style={styles.container}>
      
       <Image source={require('./ogre.png')}></Image>
        </View>
        <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       <View style={styles.container}>
      
      <Image source={require('./ogre.png')}></Image>
       </View>
       
        
        
        </ScrollView>
      
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      padding: 10,
    },
  });
export default First;