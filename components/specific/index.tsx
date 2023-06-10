import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styles from "./index.style";

interface Props {
  title?: string;
  children: any;
}

const Specific: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Specific</Text>
      </View>
      <View style={styles.contentContainer}>{props.children}</View>
    </View>
  );
};

export default Specific;
