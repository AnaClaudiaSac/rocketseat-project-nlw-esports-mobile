import React, { useRef } from "react";
import { StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { AppRoutes } from "../src/routes/app.routes";
import { Loading } from "../src/components/Loading/Loading";
import { Background } from "../src/components/Background/Background";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar barStyle="light-content" translucent />

      {fontsLoaded ? <AppRoutes /> : <Loading />}
    </Background>
  );
}
