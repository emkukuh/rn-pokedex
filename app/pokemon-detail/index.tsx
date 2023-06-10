import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Screen from "../../layout/screen";

const PokemonDetail = () => {
  const router = useRouter();
  return (
    <Screen isWithScroll={true}>
      <View>
        <Text>PokemonDetail</Text>
        <Text>PokemonDetail</Text>
        <Text>PokemonDetail</Text>
        <Text>PokemonDetail</Text>
        <Text>PokemonDetail</Text>
      </View>
    </Screen>
  );
};

export default PokemonDetail;
