import React, { useContext, useState } from "react";

// eslint-disable-next-line import/namespace

import { View, StyleSheet } from "react-native";

import { Navbar } from "./components/navbar";

import { TodoContext } from "./context/todo/todo.context";

import { MainScreen } from "./screens/main.screen";

import { TodoScreen } from "./screens/todo.screen";

import { THEME } from "./theme";

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);

  const [todoId, setTodoId] = useState(null);

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App!" />

      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,

    paddingVertical: 20,

    backgroundColor: "white",
  },
});
