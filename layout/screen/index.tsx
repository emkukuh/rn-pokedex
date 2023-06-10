import { Stack } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

import Assets from "../../assets";

interface Props {
  headerTitle: string;
  isWithScrool: boolean;
  children: any;
}

const Screen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitle: props.headerTitle,
          headerLeft: () => (
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={Assets.Icons.ic_pokeball}
                style={{ height: "60%", width: "60%" }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <View>
        {props.isWithScrool ? (
          <ScrollView style={{ padding: 12 }}>{props.children}</ScrollView>
        ) : (
          <View style={{ padding: 12 }}>{props.children}</View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
