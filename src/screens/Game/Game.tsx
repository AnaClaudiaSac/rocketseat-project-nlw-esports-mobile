import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Background } from "../../components/Background/Background";
import { GameParams } from "@/src/@types/navigation";

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  console.log(game);

  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>;
    </Background>
  );
}
