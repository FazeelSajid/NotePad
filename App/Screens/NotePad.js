import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NotePadList from '../Components/NotePadList'


const NotePad = ({Notes, GetData, deleteNote, editScreenHandler, setIdOfTaskToUpdate}) => {
  let navigation = useNavigation();

  // console.log(Notes);
  return (
    <View style={styles.container}>
      {/* <NotePadList Task={Notes[0].task} /> */}
      <FlatList
      ListEmptyComponent={<Text> There is no Task For Today</Text>}
      data={Notes}
      // ListEmptyComponent={<Text></Text>}
      renderItem={({item})=>{
        
        return(
          <NotePadList Task={item.task} id={item.id} deletebtn={deleteNote} editBtn={editScreenHandler} />
        )
        }
      }
      />
      {/* <Button title='Add NewTask' onPress={()=> navigation.navigate('newTask')}></Button> 
      <Button title='Add NewTask' onPress={()=> navigation.navigate('editTask')}></Button>  */}
    </View>
  )
}

export default NotePad

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor : '#212529',
        flex:  1,
    }
})