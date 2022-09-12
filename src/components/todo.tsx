import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
        <MaterialCommunityIcons
          color="white"
          size={24}
          name="cursor-default-click-outline"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  title: {
    color: 'white',
  },
});
