import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoScreen = () => {
  return (
    <View style={{marginHorizontal:16}}>
      <Text>TodoScreen</Text>
      <TextInput
        style= {{
            borderWidth: 2,
            borderColor: "#1e90ff",
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 16,
        }}
        placeholder='Add a new task'
      />
        <TouchableOpacity 
            style={{
                backgroundColor: "#000",
                borderRadius: 6,
                paddingVertical: 8,
                alignItems: 'center',
            }}
        >
            <Text style={{color:"#fff", fontWeight:"bold", fontSize: 20}}>
                Add
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})