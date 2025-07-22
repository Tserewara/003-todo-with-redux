import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: nanoid(), description: "Learn redux" }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action)
            state.todos.push({
                id: nanoid(),
                description: action.payload
            });
        },
        removeTodo: (state, action) => {
            console.log(action)
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;