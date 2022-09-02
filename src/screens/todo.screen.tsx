import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
// eslint-disable-next-line import/namespace
import { StyleSheet, View } from "react-native";

import { AppButton } from "../components/UI/appButton";
import { AppCard } from "../components/UI/appCard";
import { AppTextBold } from "../components/UI/appTextBold";
import { ModalWindow } from "../components/modalWindow";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
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
        <AppButton color="black" onPress={() => setModal(true)}>
          <MaterialIcons name="mode-edit" size={15} color="white" />
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color="black">
            <Ionicons
              name="ios-return-down-back-outline"
              size={20}
              color="white"
            />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color="black" onPress={() => onRemove(todo.id)}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={20}
              color="white"
            />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
});
