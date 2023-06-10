import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "green",
    overflow: "hidden",
  },
  titleContainer: {
    backgroundColor: "green",
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
  contentContainer: {
    paddingVertical: 12,
    justifyContent: "center",
  },
});

export default styles;
