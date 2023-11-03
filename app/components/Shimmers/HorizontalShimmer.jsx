import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme"
import ReusableShimmer from "./ReusableShimmer";

const HorizontalShimmer = ({
  horizontal,
  width,
  height,
  radius,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {
  const shimerList = [1, 2, 3, 4, 5];
  return (
    <FlatList
      data={shimerList}
      horizontal={horizontal}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={styles.shimmer(
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight
          )}
        >
          <ReusableShimmer width={width} height={height} radius={radius} />
        </View>
      )}
    />
  );
};

export default HorizontalShimmer;

const styles = StyleSheet.create({
  shimmer: (paddingTop, paddingBottom, paddingLeft, paddingRight) => ({
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
  }),
});
