import {
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient
          style={styles.footer}
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
        >
          <Text style={styles.name}> {data.title}</Text>
          <Text style={styles.ads}> {data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
