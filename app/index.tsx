import { StatusBar } from "react-native";

import { Background } from "@/src/components/Background/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Home } from "../src/screens/Home/Home";
import { Loading } from "../src/components/Loading/Loading";

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

      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
