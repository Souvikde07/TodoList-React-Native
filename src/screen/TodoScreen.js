import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from "react-native-paper"

const dummyData = [{
  id : "01",
  title: "Wash my car",
},{
  id : "02",
  title: "Read a book",
}] 

const TodoScreen = () => {

  //Initialize local State
  

  //Render todo
  const renderTodos = ({item, index}) => {
    return(
      <View style={{
        backgroundColor:"#1e90ff", 
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        }}>
        
        <Text style = {{color:"#fff", fontSize:20, fontWeight: "800", flex: 1}}>
          {item.title}
        </Text>
        <IconButton icon="pencil" iconColor='#fff'/>
        <IconButton icon="trash-can" iconColor='#fff'/>
      </View>
    )
  }

  return (
    <View style={{marginHorizontal:16}}>
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
                marginVertical: 34,
                alignItems: 'center',
            }}
        >
            <Text style={{color:"#fff", fontWeight:"bold", fontSize: 20}}>
                Add
            </Text>
        </TouchableOpacity>
        {/*Render todo List*/}
        <FlatList data={dummyData} renderItem={renderTodos}/>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})