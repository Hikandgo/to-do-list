/* eslint-disable import/namespace */
import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { THEME } from "../theme";

export const ModalWindow = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error!",
        `Минимальная длина названия 3 символа. Сейчас длина ${
          title.trim().length
        }`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" color={THEME.RED_COLOR} onPress={onCancel} />
          <Button
            title="Save"
            color={THEME.GREEN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
