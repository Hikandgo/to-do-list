import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { TodoContext } from '../context/todo/todo.context';
import { ScreenContext } from '../context/screen/screen.context';
import { ModalWindow } from '../components/modalWindow';
import { AppButton } from '../components/UI/appButton';
import { AppTextBold } from '../components/UI/appTextBold';
import { AppCard } from '../components/UI/appCard';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const TodoScreen = () => {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos.find(t => t.id === todoId);

  const saveHandler = title => {
    updateTodo(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <ModalWindow
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20} />
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            onPress={() => changeScreen(null)}
            color='black'
          >
            <AntDesign name='back' size={20} color='white' />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color='black'
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name='remove' size={20} color='white' />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    // width: Dimensions.get('window').width / 3
    width: '45%',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
  },
});
