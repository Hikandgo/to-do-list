import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/navbar';
import { ScreenContext } from './context/screen/screen.context';
import { MainScreen } from './screens/main.screen';
import { TodoScreen } from './screens/todo.screen';
import { THEME } from './theme';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
      <Navbar title='DO IT NOW' />
      <View>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});
