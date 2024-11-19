import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { Game } from "../screens/Game/Game";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="game" component={Game} />
    </Navigator>
  );
}
