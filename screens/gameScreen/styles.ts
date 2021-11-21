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
    borderWidth: 1,
    borderColor: colors.white,
    width: "80%",
    aspectRatio: 1,
  },
  circle: {
    position: "absolute",
    left: 2 * 108,
    top: 2 * 108,
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
    width: 75,
    height: 75,
    position: "absolute",
  },
  crossline: {
    position: "absolute",
    width: 10,
    height: 75,
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
