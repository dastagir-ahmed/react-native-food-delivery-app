import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";

const RegistrationTile = ({ onPress, heading, desc }) => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.text}>{heading}</Text>
          <Text style={styles.email}>
           {desc}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 90,
            height: 30,
            borderRadius: 40,
            borderColor: COLORS.black,
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationTile;

const styles = StyleSheet.create({
  outer: {
    height: 75,
    backgroundColor: COLORS.lightWhite,
    margin: 10,
    borderRadius: 12,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: {
    marginLeft: 10,
    fontFamily: "medium",
    color: COLORS.black,
    fontSize: 14
  },
  email: {
    marginLeft: 10,
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 10,
    marginTop: 3,
    width: SIZES.width * 0.56,
    textAlign: "justify",
  },
});
