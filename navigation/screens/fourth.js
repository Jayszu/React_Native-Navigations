import * as React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';


const Fourth=({navigation})=>{
    return(
        <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>Michael Jay Cariño</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>Jomarin Terre</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>Carl Andrei</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>Mica Soriano</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>Diether Sandoval</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source ={{uri:''}}/>
        <Text style={styles.cardText}>John Mark De Vera</Text>
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
export default Fourth;