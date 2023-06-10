import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import Card from "~/components/card";
import Screen from "../layout/screen";
import Assets from "../assets";

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

  const pokedexTitle = () => (
    <Image
      source={Assets.Icons.ic_pokeball}
      style={{ width: 30, height: 30 }}
    />
  );

  return (
    <Screen isWithScroll={true} headerTitle={pokedexTitle}>
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
