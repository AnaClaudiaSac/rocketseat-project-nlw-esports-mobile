import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { DuoInfo } from "../DuoInfo/DuoInfo";

export interface DuoCardProps {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo label="Disponibilidade" value={`${data.weekDays.length} dias`} />
      <DuoInfo label="Nome" value="Anna" colorValue="rgb(41, 94, 228)" />
    </View>
  );
}
