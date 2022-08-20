import * as React from 'react';
import {View, Text, FlatList,StyleSheet} from 'react-native';


const Second=({navigation})=>{
    return(
        <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Philippines'},
          {key: 'America'},
          {key: 'Japan'},
          {key: 'Indonesia'},
          {key: 'Netherlands'},
          {key: 'Russia'},
          {key: 'Turkey'},
          {key: 'Canada'},
          {key: 'Italy'},
          {key: 'Mexico'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     
    },
    item: {
      padding: 10,
      fontSize: 20,
      height: 44,
      textAlign:'center',
      fontWeight:'bold',
      backgroundColor:'#fff',
      marginVertical:10

      
    },
  });
export default Second;