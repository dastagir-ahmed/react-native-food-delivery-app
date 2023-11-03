import { StyleSheet, Image } from "react-native";
import React from "react";

const AssetImage = ({data, width, height,radius, mode }) => {
  return (
    <Image  source={data} style={styles.image(width, height,radius, mode )}/>
  );
};

export default AssetImage;

const styles = StyleSheet.create({
  image: (width, height,radius, mode ) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: mode,
  }),
});
