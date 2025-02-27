import React, {useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"


const AddItem = ({title, addItem}) => {

    const [text, setText] = useState("")

    const onChange = (textValue) => setText(textValue)


  return(
   <View>
       <TextInput placeholder="Add Todo.." style={styles.input} onChangeText={onChange} />
       <TouchableOpacity style={styles.btn} onPress = {() => {
           addItem(text)
       }}>
           <Text style = {styles.btnText}><Icon name="plus" size={20} /> Add Todo</Text>
        </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "#192A56",
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: "#BA2F16",
        fontSize: 20,
        textAlign: "center",
    }
 
})

export default AddItem;
