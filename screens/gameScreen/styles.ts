import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  map: {
    width: "80%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  buttonRow: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },

  buttonActive: {
    color: colors.white,
    margin: 10,
    fontSize: 20,
    backgroundColor: colors.buttonActive,
    padding: 10,
    paddingHorizontal: 15,
  },

  buttonInActive: {
    color: colors.white,
    margin: 10,
    fontSize: 20,
    backgroundColor: colors.buttonInactive,
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default styles;
