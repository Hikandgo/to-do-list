import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { AddTodo } from '../components/addtodo';
import { Todo } from '../components/todo';
import { ScreenContext } from '../context/screen/screen.context';
import { TodoContext } from '../context/todo/todo.context';



export const MainScreen = () => {
  const { addTodo, todos, removeTodo } = useContext(
    TodoContext,
  );
  const { changeScreen } = useContext(ScreenContext);
  let content = (
    <View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
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

