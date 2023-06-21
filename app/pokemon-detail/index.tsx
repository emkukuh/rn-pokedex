import { useRouter, useSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Card from "../../components/card";
import Specific from "../../components/specific";
import Screen from "../../layout/screen";

import styles from "./index.style";
import { gql, useQuery } from "@apollo/client";

const PokemonDetail = () => {
  const router = useRouter();
  const { id, name } = useSearchParams();
  const QUERY = gql`
    query Pokemon($id: String!) {
      pokemon(id: $id) {
        id
        name
        image
        classification
        weight {
          minimum
          maximum
        }
        evolutions {
          id
          name
          image
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    variables: { id: id.toString() },
  });

  if (error) {
    return <Text>{`${error}`}</Text>;
  }
  return (
    <Screen headerTitle={name} isWithScroll={true} isHideBackButton={true}>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading nich...</Text>
        ) : (
          <>
            <View
              style={{
                height: 300,
                width: "100%",
              }}
            >
              <Image
                source={{ uri: data.pokemon.image }}
                resizeMode="contain"
                style={{
                  height: "100%",
                }}
              />
            </View>
            <View style={{ gap: 12 }}>
              <Specific title="Weight Range">
                <Text
                  style={styles.textSpecificContent}
                >{`${data.pokemon.weight.minimum} - ${data.pokemon.weight.maximum}`}</Text>
              </Specific>
              <Specific title="Classification">
                <Text style={styles.textSpecificContent}>
                  {data.pokemon.classification}
                </Text>
              </Specific>
              {data.pokemon.evolutions && (
                <Specific title="Evolutions">
                  <ScrollView
                    horizontal
                    style={styles.evolutionSpecificContentContainer}
                  >
                    <View style={styles.evolutionSpecificContent}>
                      {data.pokemon.evolutions.map((evo: any) => (
                        <Card
                          key={evo.id}
                          width={160}
                          name={evo.name}
                          imageUrl={evo.image}
                          onPress={() =>
                            router.push(`./pokemon-detail?id=${evo.id}`)
                          }
                        />
                      ))}
                    </View>
                  </ScrollView>
                </Specific>
              )}
            </View>
          </>
        )}
      </View>
    </Screen>
  );
};

export default PokemonDetail;
