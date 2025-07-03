import {Animated, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import ScrollView = Animated.ScrollView;


const AddTodo = () => {
    const [titleText,setTitleText] = useState('');
    const [todoText,setTodoText] = useState('');

    const handleAddTodo = () => {}


    return (
        <View style={AddTodoStyles.container}>
            <ScrollView style={AddTodoStyles.scrollView}   contentContainerStyle={AddTodoStyles.scrollContent} >
                    <View style={AddTodoStyles.titleView}>
                <Text style={AddTodoStyles.titleText}>제목</Text>
                <TextInput style={AddTodoStyles.textInput} onChangeText={titleText=>setTitleText(titleText)} defaultValue={titleText}/>
                <Text style={AddTodoStyles.subText}>할일</Text>
                <TextInput
                    style={AddTodoStyles.textArea}
                    numberOfLines={3}
                    multiline
                    maxLength={200}
                    defaultValue={todoText}
                    onChangeText={todoTextValue => setTodoText(todoTextValue)}
                />
            </View>
            </ScrollView>
            <View style={AddTodoStyles.fixedBottomButton}>
                <TouchableOpacity style={AddTodoStyles.addButton} onPress={handleAddTodo}><Text style={AddTodoStyles.addButtonText}>추가하기</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const AddTodoStyles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        backgroundColor: '#f9fafb',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        width:'100%'
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
        backgroundColor: '#fff',
    },
    titleView: {
        width: '100%',
        height:'100%',
        padding: 20,
        backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 10,
    },
    subText:{
        marginBottom:10,
        marginTop:10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#343a40',
    },
    addButton: {
        width: '100%',
        height: 48,
        backgroundColor: '#ff7227',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    textArea:{
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        textAlignVertical:'top'
    },
    fixedBottomButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#dee2e6',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
});

export default AddTodo