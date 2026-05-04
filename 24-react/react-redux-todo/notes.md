# React Redux Concepts & Step-by-Step Setup

This guide explains the core concepts of React Redux used in this To-Do project. Redux is a predictable state container for JavaScript apps, and `@reduxjs/toolkit` is the official, recommended way to write Redux logic. `react-redux` is the official React UI bindings layer for Redux.

## Core Concepts Used in the Project

### 1. Store (`configureStore`)
The **Store** is like a giant container or a database for your frontend application. It holds the entire state (data) of your application in a single place.
- **In this project:** We created the store using `configureStore` in `src/app/store.js`. We tell the store about our `todoReducer` so it knows how to update the state when actions are dispatched.

### 2. Provider (`<Provider>`)
The **Provider** is a React component given to us by the `react-redux` library. It wraps your entire React application and makes the Redux store available to any nested components that need to access it.
- **In this project:** We wrap our `<App />` inside `<Provider store={store}>` in `src/main.jsx`.

### 3. Slice (`createSlice`)
A **Slice** is a collection of Redux reducer logic and actions for a single feature of your app (e.g., a "todo" slice, a "user" slice). It automatically generates action creators and action types that correspond to the reducers and state.
- **In this project:** We used `createSlice` in `src/feature/toto/todoSlice.js` to create the `todoSlice`. It takes three main things:
  - `name`: A string name for the slice ('todo').
  - `initialState`: The starting data (e.g., an array with one default todo).
  - `reducers`: An object containing functions (like `addTodo` and `removeTodo`) that determine how the state changes in response to an action.

### 4. Actions
**Actions** are plain JavaScript objects that describe **what happened** in the application. They must have a `type` property. When using `createSlice`, these actions are created automatically for you.
- **In this project:** `addTodo` and `removeTodo` are our actions exported from the slice.

### 5. Reducers
A **Reducer** is a function that takes the current `state` and an `action`, and decides how to update the state based on that action. It returns the new state.
- **In this project:** Inside `createSlice`'s `reducers` property, we define functions like `addTodo(state, action)`. Unlike older Redux, Redux Toolkit uses a library called Immer behind the scenes, allowing you to write code that "mutates" the state (like `state.todos.push()`), which actually safely produces a new state copy.

### 6. `nanoid`
A utility function from Redux Toolkit used to generate unique string IDs.
- **In this project:** Used to generate a unique `id` when creating a new todo item.

---

## Redux Hooks Used in the Project

To let React components interact with the Redux store, we use hooks provided by `react-redux`.

### 1. `useSelector` (Reading Data)
`useSelector` is a hook that allows you to extract data from the Redux store state. It's like asking the store, "Give me this specific piece of data." Whenever the data in the store changes, `useSelector` will automatically re-render your component with the latest data.
- **In this project:** In `src/components/Todos.jsx`, we use `const todos = useSelector(state => state.todos)` to grab the list of todos from the store and display them.

### 2. `useDispatch` (Writing/Updating Data)
`useDispatch` is a hook that returns a reference to the `dispatch` function from the Redux store. You use it to dispatch (send) actions to the store to trigger a state change. It's like sending an instruction to the store saying, "Hey, update the state using this action."
- **In this project:** 
  - In `src/components/AddTodo.jsx`, we use `dispatch(addTodo(input))` to send a new todo to the store.
  - In `src/components/Todos.jsx`, we use `dispatch(removeTodo(todo.id))` to tell the store to delete a specific todo.

---

## Step-by-Step Setup Guide

If you were to recreate this from scratch, here is the step-by-step process:

### Step 1: Install Dependencies
First, install Redux Toolkit and React-Redux:
```bash
npm install @reduxjs/toolkit react-redux
```

### Step 2: Create a Redux Store
Create a file named `src/app/store.js`.
```javascript
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // We will add reducers here later
  },
});
```

### Step 3: Provide the Redux Store to React
Open your entry point file (`src/main.jsx` or `src/index.js`), import the `store` and `<Provider>`, and wrap your `<App />`.
```javascript
import { Provider } from 'react-redux';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

### Step 4: Create a Redux State Slice
Create a new file for your feature, e.g., `src/feature/todo/todoSlice.js`. Define the initial state and reducers using `createSlice`.
```javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello World!' }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  }
});

// Export actions for components to use
export const { addTodo, removeTodo } = todoSlice.actions;

// Export reducer to configure in the store
export default todoSlice.reducer;
```

### Step 5: Add Slice Reducers to the Store
Go back to `src/app/store.js` and add the `todoReducer` to the store.
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer // Or reducer: { todos: todoReducer } depending on state structure
});
```
*(Note: In your project, it's defined directly as `reducer: todoReducer` which makes `state.todos` accessible directly if the initial state is an object with a `todos` property).*

### Step 6: Use Redux State and Actions in React Components
Use `useSelector` to read data and `useDispatch` to dispatch actions in your components.

**Adding Data (AddTodo.jsx):**
```javascript
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  // ... inside form submit handler:
  dispatch(addTodo(inputValue));
}
```

**Reading and Deleting Data (Todos.jsx):**
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../feature/todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  // ... inside render:
  // todos.map(todo => <div onClick={() => dispatch(removeTodo(todo.id))}>{todo.text}</div>)
}
```
