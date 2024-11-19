import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";


export default function Task({ navigation }) {
    const [task, setTask] = useState([]);
    const [markedTasks, setMarkedTasks] = useState([]); 

    function deleteTask(id) {
        database.collection("GEAR-Task").doc(id).delete();
    }

    function markTask(id) {
        if (markedTasks.includes(id)) {
            
            setMarkedTasks(markedTasks.filter(taskId => taskId !== id));
        } else {
            
            setMarkedTasks([...markedTasks, id]);
        }
    }

    useEffect(() => {
        database.collection("GEAR-Task").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    const isMarked = markedTasks.includes(item.id);
                    return (
                        <View 
                            style={[
                                styles.Tasks, 
                                isMarked ? { backgroundColor: "#83C5BE" } : { backgroundColor: "#f5f5f5" } 
                            ]}
                        >
                            <View style={styles.buttonsContainer}>
                                { }
                                <TouchableOpacity 
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        deleteTask(item.id);
                                    }}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={23}
                                        color="#878af6"
                                    />
                                </TouchableOpacity>
                                
                                { }
                                <TouchableOpacity 
                                    style={styles.markTask}
                                    onPress={() => {
                                        markTask(item.id);
                                    }}
                                >
                                    <FontAwesome
                                        name={isMarked ? "times" : "check"} 
                                        size={23}
                                        color={isMarked ? "#D73737" : "#1FAE45"}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text
                                style={styles.DescriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description
                                    });
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
