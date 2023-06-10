import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
    height: 240,
    borderRadius: 10,
    flexBasis: "48%",
    overflow: "hidden",
  },
  imageContainer: {
    height: "80%",
    paddingTop: 16,
  },
  image: {
    height: "100%",
  },
  nameContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
  },
  name: {
    color: "white",
  },
});

export default styles;
