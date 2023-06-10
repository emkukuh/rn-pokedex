import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useState } from "react";
import styles from "./index.style";
import { transform } from "typescript";

interface Props {
  imageUrl: string;
  onPress?: () => void;
}

const Card: React.FC<Props> = (props) => {
  const [scaleValue] = useState(new Animated.Value(1));
  const animatePressedInButton = () => {
    Animated.timing(scaleValue, {
      toValue: 0.96,
      duration: 145,
      useNativeDriver: true,
    }).start();
  };
  const animatePressedOutButton = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 125,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={animatePressedInButton}
      onPressOut={animatePressedOutButton}
      onPress={props.onPress}
    >
      <Animated.View
        style={[styles.container, { transform: [{ scale: scaleValue }] }]}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.imageUrl }}
            resizeMode="center"
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Name</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
