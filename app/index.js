import { View } from "react-native";
import Screen from "../layout/screen";
import Card from "~/components/card";

const Home = () => {
  return (
    <Screen isWithScroll={true} headerTitle="Pokedex XXX">
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingBottom: 16,
        }}
      >
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
        <Card imageUrl="imageURl here" />
      </View>
    </Screen>
  );
};

export default Home;
