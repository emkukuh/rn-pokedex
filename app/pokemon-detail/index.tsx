import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import Screen from "../../layout/screen";
import Specific from "../../components/specific";
import Card from "../../components/card";

import styles from "./index.style";

const PokemonDetail = () => {
  const router = useRouter();
  const param = useSearchParams();
  return (
    <Screen
      headerTitle={param.name}
      isWithScroll={true}
      isHideBackButton={true}
    >
      <View>
        <Specific>
          <Text style={styles.textSpecificContent}>6.04kg - 7.76kg</Text>
        </Specific>
        <Specific>
          <ScrollView
            horizontal
            style={styles.evolutionSpecificContentContainer}
          >
            <View>
              <Card
                width={160}
                imageUrl="https://img.pokemondb.net/artwork/bulbasaur.jpg"
              />
            </View>
          </ScrollView>
        </Specific>
      </View>
    </Screen>
  );
};

export default PokemonDetail;
