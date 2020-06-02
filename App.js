import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}} >
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput placeholder="Add Goals"
        style={{width:'80%', borderBottomWidth:1, padding:10, borderBottomColor:'black'}}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
