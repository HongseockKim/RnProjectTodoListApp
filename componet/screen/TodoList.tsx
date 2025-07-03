import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App.tsx";


type TodoListNavigationProp = NativeStackNavigationProp<
RootStackParamList,
'TodoList'
>;

interface Props {
    navigation: TodoListNavigationProp;
}

const TodoList: React.FC<Props> = ({ navigation }) => {
    const handleAddTodo = () => {
        // AddTodo 화면으로 이동!
        navigation.navigate('AddTodo');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>해야할 일을 추가해보세요!</Text>
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#ffa962',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default TodoList;