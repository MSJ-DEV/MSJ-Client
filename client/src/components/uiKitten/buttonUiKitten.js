import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

const ButtonSimpleUsageShowcase = () => {
  return (
    <Layout style={styles.container} level="1">
      <Button>DARK</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 8,
  },
});

export default {
  ButtonSimpleUsageShowcase,
};
