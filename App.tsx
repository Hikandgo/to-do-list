import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import React, { useCallback, useEffect } from "react";

import { View } from "react-native";

import { TodoState } from "./src/context/todo/todo.state";

import { MainLayout } from "./src/main.layout";

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),

    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),

    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <TodoState>
        <MainLayout />
      </TodoState>
    </View>
  );
}
