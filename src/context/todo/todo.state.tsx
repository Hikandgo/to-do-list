import React, { useContext, useReducer } from 'react';
import { Alert } from 'react-native';
import { ADD_TODO, REMOVE_TODO, FETCH_TODOS, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER } from '../method.types';
import { ScreenContext } from '../screen/screen.context';
import { TodoContext } from './todo.context';
import { todoReducer } from './todo.reducer';

export const TodoState = ({ children }) => {
  const initiateState = {
    todos: [],
    loading: false,
    error: null,
  };

  const { changeScreen } = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, initiateState);

  const addTodo = async (title) => {
    const response = await fetch('https://reactnative-doitnow-default-rtdb.firebaseio.com/todos.json', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }),
    });
    const data = await response.json();
    console.log('Data', data);
    dispatch({ type: ADD_TODO, title, id: data.name });
  };

  const removeTodo = (id) => {
    const todo = state.todos.find(t => t.id === id);
    Alert.alert('Удаление элемента', `Точно удалить ${todo.title}?`, 
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          },
        }], 
      { cancelable: true },
    );
  };

  const fetchTodos = async () => {
    showLoader();
    const response = await fetch('https://reactnative-doitnow-default-rtdb.firebaseio.com//todos.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
    dispatch({ type: FETCH_TODOS, todos });
    hideLoader();
  };

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });

  const showLoader = () => dispatch({ type:SHOW_LOADER });

  const hideLoader = () => dispatch({ type:HIDE_LOADER });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
