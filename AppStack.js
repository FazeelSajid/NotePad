import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NotePad from "./App/Screens/NotePad";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import api from "./App/api/api";
import { useEffect, useState } from "react";
import Buttons from "./App/Components/Buttons";
import NewTask from "./App/Screens/NewTask";
import { useNavigation } from "@react-navigation/native";
import EditTask from "./App/Screens/EditTask";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  let [Notes, setNotes] = useState([]);
  const navigation = useNavigation();
  let [editscreen, setEditScreen] = useState(false);
  let [idOfTaskToUpdate, setIdOfTaskToUpdate] = useState(null);

  // const GetData = async () => {
  //   let response = await api.get("/Notes.json");

  //   if (!response.ok) {
  //     console.log(`Error: ${response.data['error']}`);
  //     return;
  //   }
  //     setNotes(notes)
  // };

  const GetData = async () => {
    let response = await api.get("Notes.json");

    if (!response.ok) {
      console.log(`Error: ${response.data["error"]}`);
      return;
    }
    let notes = [];
    for (let key in response.data) {
      const object = {
        id: key,
        task: response.data[key].task,
      };
      notes.push(object);
      setNotes(notes);
    }
  };

  const newtaskHandlerScreen = () => {
    setEditScreen(false);
    navigation.navigate("task");
  };
  const deleteNote = async (id) => {
    try {
      let response = await api.delete(`/Notes/${id}.json`);
      if (!response.ok) {
        console.log(`Error : ${response.data}`);
        return;
      }
      let newArray = Notes.filter ((item) =>{
        if (item.id === id) {
          return false;
        }
        return true;
      })
      setNotes(newArray);
      // GetData();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const editTaskfunc = async (id, updatedData) => {
    let response = await api.put(`/Notes/${id}.json `, {
      task: updatedData,
    });
    console.log(id);
    if (!response.ok) {
      console.log(`Error : ${response.data}`);
      // console.log(response.data);
      return;
    }

    let newArray = Notes.map((item)=>{
      if (item.id === id) {
        return  {...item, task: updatedData}
      }
      return item
      // return item.id == id ? {...item, task: updatedData} : item
    });
    setNotes(newArray);
    console.log(updatedData);
    navigation.navigate("home");
  };

  const editScreenHandler = (itemId) => {
    console.log(itemId);
    setIdOfTaskToUpdate(itemId);
    setEditScreen(true);
    navigation.navigate("task");
  };

  const addTask = async (newtask) => {
    Notes.forEach((item)=>{
      if (item.task === newtask){
        console.log('Task Already Exists');
        return;
      }
      // 
  
      })
    let newtaske = {
      task: newtask,
    };
    let response = await api.post("/Notes.json", newtaske);

    if (!response.ok) {
      console.log(`Error: ${response.data}`);
      return;
    }
    // GetData();
    setNotes((prevValue) => [...prevValue, newtaske]);
    navigation.navigate("home");
    console.log(newtask);
  };
  // const checkTask = (task) => {
   
    
  // };
  // console.log(Notes);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{
          title: "Note PaD",
          headerStyle: { backgroundColor: "#343A40" },
          headerTintColor: "#F8F9FA",
          headerRight: () => {
            return (
              <Buttons
                iconName="square-edit-outline"
                iconColor={"#F8F9FA"}
                onPress={() => newtaskHandlerScreen()}
              />
            );
          },
        }}
      >
        {(props) => (
          <NotePad
            Notes={Notes}
            GetData={GetData}
            deleteNote={deleteNote}
            editScreenHandler={editScreenHandler}
            setIdOfTaskToUpdate={setIdOfTaskToUpdate}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="task"
        options={{
          title: editscreen ? "Edit Task" : "New Task",
          headerStyle: { backgroundColor: "#343A40" },
          headerTintColor: "#F8F9FA",
        }}
      >
        {(props) => {
          return (
            <NewTask
              {...props}
              addTask={addTask}
              editscreen={editscreen}
              editTaskfunc={editTaskfunc}
              idOfTaskToUpdate={idOfTaskToUpdate}
            />
          );
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
