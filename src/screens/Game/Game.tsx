import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background/Background";

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>;
    </Background>
  );
}
