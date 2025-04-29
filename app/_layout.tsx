import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {

    return <Stack layout={({ children, state, descriptors, navigation }) => (
        <View style={styles.container}>
            <Breadcrumbs
                state={state}
                descriptors={descriptors}
                navigation={navigation}
            />
            {children}
        </View>
  )} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
    backgroundColor:'darkorange'
  },
  containerIner:{
    borderRadius:15,
    backgroundColor:'white'
  }
});
