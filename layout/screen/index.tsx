import { Stack } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

import Assets from "../../assets";

interface Props {
  headerTitle?: any;
  isWithScroll?: boolean;
  children: any;
  backButton?: any;
}

const Screen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitle: props.headerTitle,
        }}
      />
      <>
        {props.isWithScroll ? (
          <ScrollView style={{ padding: 12 }}>{props.children}</ScrollView>
        ) : (
          <View style={{ padding: 12, backgroundColor: "blue" }}>
            {props.children}
          </View>
        )}
      </>
    </SafeAreaView>
  );
};

export default Screen;
