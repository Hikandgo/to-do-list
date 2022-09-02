/* eslint-disable import/namespace */
import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";

import { AddTodo } from "../components/addtodo";
import { Todo } from "../components/todo";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const content = (
    <View style={{}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  );

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};
