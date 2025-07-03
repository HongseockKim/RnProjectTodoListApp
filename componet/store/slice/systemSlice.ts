import {createSlice} from '@reduxjs/toolkit';
import {systemState} from "../types/todo.ts";


const initialState: systemState= {
    headerTitle: 'Todo List',
    logoShow: true,
};

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setLogoShow: (state, action) => {
            state.logoShow = action.payload;
        },
        setHeaderTitle: (state, action) => {
            state.headerTitle = action.payload;
        },
        resetHeaderTitle: (state) => {
            state.headerTitle = 'Todo List';
        },
    },
});

export const { setHeaderTitle, resetHeaderTitle,setLogoShow } = systemSlice.actions;
export default systemSlice.reducer;