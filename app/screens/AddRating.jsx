import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ReusableHeader from "../components/ReusableHeader";
import { RatingInput, Rating } from "react-native-stock-star-rating";
import { COLORS, SIZES } from "../constants/theme";
import { AssetImage } from "../components";

const AddRating = () => {
  const [rating, setRating] = useState(0);
  return (
    <SafeAreaView style={{ height: SIZES.height }}>
      <Image
        source={{
          uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/2d5faf00-e235-4a78-9688-ad4d3280ec03-rating_bk.jpg",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={30}
      />
      <ReusableHeader title={"Add Ratings"} backbtn={true} />

      <View style={styles.container}>
        <View style={styles.ratingBox}>
          <View style={styles.image}>
            <AssetImage
              data={require("../../assets/images/profile.jpg")}
              mode={"cover"}
              width={70}
              height={70}
              radius={99}
            />
          </View>

          <View style={{ paddingTop: 40 }}>
            <RatingInput
              rating={rating}
              color={COLORS.primary}
              setRating={setRating}
              size={50}
              maxStars={5}
              bordered={false}
            />

            <Text
              style={[
                styles.small,
                { paddingLeft: 80, marginTop: 10, color: COLORS.black },
              ]}
            >
              TAP TO RATE
            </Text>
          </View>
        </View>

        <View style={{ height: 50 }} />

        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 12,
            borderColor: COLORS.lightWhite,
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.small}>SUBMIT RATING</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddRating;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  ratingBox: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
    height: 140,
    backgroundColor: "#c2f0ff59",
    borderRadius: 12,
  },

  image: {
    position: "absolute",
    zIndex: 999,
    top: -30,
  },
  small: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.lightWhite,
  },
});
