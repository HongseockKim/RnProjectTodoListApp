import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice.ts";
import systemSlice from "./slice/systemSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        system:systemSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
