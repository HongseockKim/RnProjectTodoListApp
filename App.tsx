import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from "./componet/common/Header.tsx";
import TodoList from "./componet/screen/TodoList.tsx";
import AddTodo from "./componet/screen/AddTodo.tsx"
import {Provider} from "react-redux";
import {store} from "./componet/store";

export type RootStackParamList = {
    TodoList: View;
    AddTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Header/>
                <Stack.Navigator
                    initialRouteName="TodoList"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="TodoList" component={TodoList} />
                    <Stack.Screen name="AddTodo" component={AddTodo} />
                </Stack.Navigator>
            </SafeAreaView>
                </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
});

export default App;