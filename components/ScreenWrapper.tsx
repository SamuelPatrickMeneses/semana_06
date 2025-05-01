import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ScreenWrapperProps = {
  title: string;
} & PropsWithChildren;

export default function ScreenWrapper({ title, children }: ScreenWrapperProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen
        options={{
          title,
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
            </TouchableOpacity>
          ),
          contentStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.containerIner}>
        {children}
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  containerIner:{
    borderRadius:15,
    backgroundColor:'white'
  }
});
