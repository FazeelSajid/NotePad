import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Buttons from './Buttons';

const NotePadList = ({Task, deletebtn, editBtn, id}) => {
  // console.log(Task);
  return (
    <View style={styles.container}>
      <Text style={styles.text} >{Task} </Text>
      <View style={styles.btnContainer} >
      <Buttons iconName="delete-circle-outline" iconColor={'tomato'} onPress={deletebtn.bind(this, id)} />
      <Buttons iconName="square-edit-outline"  iconColor={'white'} onPress ={editBtn.bind(this, id)} />
      </View>
    </View>
  )
}

export default NotePadList

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: 'Black',
        borderStyle: 'solid',
        width: '90%',
        padding:25,
        backgroundColor: '#495057',
        marginTop:20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text:{
        color:'white',
        fontSize:19,
        fontWeight: '800'
    },
    btnContainer:{
        flexDirection: 'row',
        gap: 10
    }
})