export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: string;
}

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

export interface systemState {
    headerTitle: string;
    logoShow: boolean;
}
