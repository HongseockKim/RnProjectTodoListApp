import {StyleSheet, Text, View} from "react-native";


const AddTodo = () => {
    return (
        <View style={AddTodoStyles.container}>
        <Text style={AddTodoStyles.text}>Add Todo Screen</Text>
        </View>
    );
}

const AddTodoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
});

export default AddTodo