import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // data-type
  // string
  // number
  // boolean
  // array
  // object
  // any

  
  const [age] = useState<number>(26);
  const[province] = useState<string>("Ha Noi");

  // object
  const person: { name: string, age: number } = {
    name: "Nguyen Anh Tuan",
    age: 20
  }
  const person2 : { name : string, age : number,  province: string} =
  {
    name : "Nguyen Anh Tuan",
    age : 25,
    province : "Ha Noi"
  } 

  const[person3] = useState<{ name : string, age : number,  province: string}>(
{
    name : "Nguyen Anh Group",
    age : 25,
    province : "Ha Noi"
});


  // array
  const [hobbies] = useState<string[]>(['Reading', 'Traveling', 'Gaming']);

  const [school, setSchool] = useState(['FPT','VNPT','Viettel']);

  const [name, setName] = useState<string>();
  return (
    <View style={styles.container}>
      <Text style={styles.textNew}>Hello World !</Text>
     <TextInput autoCapitalize = 'none'
      onChangeText={ text => setName(text)}
      value= { name }
      autoCorrect={false}
      // keyboardType='numeric'
      // maxLength={6}
     style = {{borderColor: "violet", padding: 10,
      borderWidth: 1, marginTop: 10, marginBottom:10,borderRadius: 10
     }} placeholder='Nhap vao thong tin'/>
      <Text style={styles.textNew}>{name}</Text>
     <Button title ="Submit" />
      <Text style={styles.textNew}>{person2.province}</Text>
      <Text style={styles.textNew}>{person3.name}</Text>
      <Text style={styles.textNew}>{hobbies[2]}</Text>
      <Text style={styles.textNew}>{JSON.stringify(person3)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },

  textNew: {
    fontWeight: 'bold',
    color: 'blue',
  },

});
