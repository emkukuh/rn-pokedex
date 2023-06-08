import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./index.style";

export interface Props {
  imageUrl: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://img.pokemondb.net/artwork/bulbasaur.jpg" }}
          resizeMode="center"
          style={styles.image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Name</Text>
      </View>
    </View>
  );
};

export default Card;
