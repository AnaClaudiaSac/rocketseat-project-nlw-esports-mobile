import React from "react";
import { View, Image, FlatList } from "react-native";

import { styles } from "../styles";

import { Heading } from "../../components/Heading/Heading";
import { GameCard } from "../../components/GameCard/GameCard";

import { GAMES } from "../../utils/games";

import logoImg from "../../../assets/images/logo-nlw-esports.png";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}