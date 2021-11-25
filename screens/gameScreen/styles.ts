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
  cell: {
    flex: 1,
    width: 100,
    height: 100,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  circle: {
    width: 75,
    height: 75,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cross: {
    flex: 1,
  },
  crossline: {
    position: "absolute",
    left: "48%",
    width: 10,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crosslineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});

export default styles;
