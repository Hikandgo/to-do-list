import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Keyboard, TextInput, View, StyleSheet } from 'react-native';
import { AppButton } from './UI/appButton';


export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="What do you want to do?"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AppButton onPress={pressHandler} color="black">
        <Ionicons name="ios-add-circle-outline" size={24} color="white" />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
