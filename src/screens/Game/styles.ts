import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  logo: {
    width: 140,
    height: 80,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 320,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  containerList: {
    width: "100%",
  },
  contentList: {
    paddingLeft: 30,
    paddingRight: 60,
    alignItems: "flex-start",
  },
});
