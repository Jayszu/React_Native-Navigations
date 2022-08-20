import * as React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView} from 'react-native';
import { ScreenContainer } from 'react-native-screens';


const Third=({navigation})=>{
   
    return(
        <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_the_Philippines_%281919%E2%80%931936%29.svg/800px-Flag_of_the_Philippines_%281919%E2%80%931936%29.svg.png?20210816061559'}}/>
        <Text style={styles.cardText}>Philippines/Asia</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png'}}/>
        <Text style={styles.cardText}>Japan/Asia</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'}}/>
        <Text style={styles.cardText}>United States of America/Americas</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png'}}/>
        <Text style={styles.cardText}>Indonesia/Asia</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png'}}/>
        <Text style={styles.cardText}>Canada/North America</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        
    );
   
}
const styles= StyleSheet.create({
container:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
},
cardText:{
    fontSize:30,
},
card:{
    backgroundColor:'gray',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'green',
    shadowOpacity:1,
    shadowOffset:{
        width:5,
        height:5,
    }
},
cardImage:{
    width:'100%',
    height:200,
    resizeMode:'contain',
}
})
export default Third;