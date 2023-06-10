import { useRouter } from "expo-router";
import { View } from "react-native";
import Card from "~/components/card";
import Screen from "../layout/screen";

const datas = [
  "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  "https://img.pokemondb.net/artwork/ivysaur.jpg",
  "https://img.pokemondb.net/artwork/venusaur.jpg",
  "https://img.pokemondb.net/artwork/charmander.jpg",
  "https://img.pokemondb.net/artwork/charmeleon.jpg",
  "https://img.pokemondb.net/artwork/charizard.jpg",
  "https://img.pokemondb.net/artwork/squirtle.jpg",
  "https://img.pokemondb.net/artwork/wartortle.jpg",
];

const Home = () => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push("./pokemon-detail");
  };

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
        {datas.map((data) => (
          <Card key={data} imageUrl={data} onPress={navigateToDetail} />
        ))}
      </View>
    </Screen>
  );
};

export default Home;
