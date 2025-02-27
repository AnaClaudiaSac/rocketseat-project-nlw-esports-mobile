import React, { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles";
import { Heading } from "../../components/Heading/Heading";
import { Background } from "../../components/Background/Background";
import { GameCard, GameCardProps } from "../../components/GameCard/GameCard";

import logoImg from "../../../assets/images/logo-nlw-esports.png";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    console.log("here...");

    fetch("http://10.0.2.2:3333/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setGames(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o que deseja jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
