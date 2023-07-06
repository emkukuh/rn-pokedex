import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import Assets from "../../assets";
import Screen from "../../layout/screen";
import Card from "../../components/card";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const QUERY = gql`
  query {
    pokemons(first: 10) {
      id
      name
      image
    }
  }
`;

const Home = () => {
  const router = useRouter();
  const { data, loading } = useQuery(QUERY);

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
        {loading ? (
          <Text>Data is Loading...</Text>
        ) : (
          data.pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.image}
              onPress={() => {
                router.push(`/pokemon-detail/${pokemon.id}`);
              }}
            />
          ))
        )}
      </View>
    </Screen>
  );
};

export default Home;
