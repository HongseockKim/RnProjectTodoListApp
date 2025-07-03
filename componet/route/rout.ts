import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// 전역 라우터 파라미터 타입 정의
export type RootStackParamList = {
    TodoList: undefined;
    AddTodo: { todoId?: string; mode?: 'add' | 'edit' };
    TodoDetail: { todoId: string };
    Settings: undefined;
};

// Navigation Props 타입들
export type TodoListNavigationProp = StackNavigationProp<RootStackParamList, 'TodoList'>;
export type AddTodoNavigationProp = StackNavigationProp<RootStackParamList, 'AddTodo'>;
export type TodoDetailNavigationProp = StackNavigationProp<RootStackParamList, 'TodoDetail'>;
export type SettingsNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

// Route Props 타입들
export type TodoListRouteProp = RouteProp<RootStackParamList, 'TodoList'>;
export type AddTodoRouteProp = RouteProp<RootStackParamList, 'AddTodo'>;
export type TodoDetailRouteProp = RouteProp<RootStackParamList, 'TodoDetail'>;
export type SettingsRouteProp = RouteProp<RootStackParamList, 'Settings'>;

// 컴포넌트 Props 타입들
export interface TodoListProps {
    navigation: TodoListNavigationProp;
    route: TodoListRouteProp;
}

export interface AddTodoProps {
    navigation: AddTodoNavigationProp;
    route: AddTodoRouteProp;
}

export interface TodoDetailProps {
    navigation: TodoDetailNavigationProp;
    route: TodoDetailRouteProp;
}

export interface SettingsProps {
    navigation: SettingsNavigationProp;
    route: SettingsRouteProp;
}