import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Buttons from '../Components/Buttons'

const NewTask = ({addTask, editscreen, editTaskfunc, idOfTaskToUpdate}) => {
  let [newTask, setNewTask] = useState()
  let [editTask, seteditTask] = useState()
 
  let newTaskHandler = (enteredTask)=>{
    setNewTask(enteredTask)
    // console.log(newTask);
  }

  let editTaskHandler = (enteredTask)=>{
    seteditTask(enteredTask)
    // console.log(editTask);
  }
  // console.log(idOfTaskToUpdate);
  // console.log(editTask);



  return (
    <View style={styles.container}>
      {editscreen ? <Text style={styles.heading}> Edit Your Task </Text>: <Text style={styles.heading}> Enter Your Task </Text>}
      
      <TextInput 
      value={editscreen ? editTask : newTask}
      onChangeText={editscreen ? editTaskHandler: newTaskHandler }
      style={styles.textInput}
      cursorColor= 'black'
      />
      <Buttons title={editscreen ? 'Edit Task': 'Add NewTask' } backgroundColor='#6C757D' onPress={()=> editscreen ? editTaskfunc(idOfTaskToUpdate, editTask) : addTask(newTask)} />
    </View>
    // editscreen ? editTaskfunc.bind(this, editTask) : addTask.bind(this, newTask)
  )
}

export default NewTask;

const styles = StyleSheet.create({
  container :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#212529',
    flex:  1,
    gap: 15
  },
  heading: {
    color: '#E9ECEF',
    fontSize: 20,
    fontWeight: '700',
  },
  textInput:{
    backgroundColor: '#CED4DA',
    width: '80%',
    height: 40,
    borderRadius: 50,
    paddingLeft: 20,
  }
})