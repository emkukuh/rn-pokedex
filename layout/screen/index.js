import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const Screen = ({ headerTitle, isWithScroll, children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen options={{ headerTitle: headerTitle }} />
      <View>
        {isWithScroll ? (
          <ScrollView style={{ padding: 12 }}>{children}</ScrollView>
        ) : (
          <View style={{ padding: 12 }}>{children}</View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
