import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";
import logoImg from "../../../assets/images/logo-nlw-esports.png";

import { GameParams } from "@/src/@types/navigation";
import { DuoMatch } from "../../components/DuoMatch/DuoMatch";
import { Heading } from "../../../src/components/Heading/Heading";
import { Background } from "../../components/Background/Background";
import { DuoCard, DuoCardProps } from "../../../src/components/DuoCard/DuoCard";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: String) {
    fetch(`http://10.0.2.2:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://10.0.2.2:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  console.log(duos);
  console.log(game.id);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>

          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

          <FlatList
            data={duos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
            )}
            horizontal
            style={styles.containerList}
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
          />
          <DuoMatch
            visible={discordDuoSelected.length > 0}
            discord={discordDuoSelected}
            onClose={() => setDiscordDuoSelected("")}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
