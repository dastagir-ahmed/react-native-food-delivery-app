import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";



const styles = StyleSheet.create({
   cover: {
      height: SIZES.height / 2.4,
      width: SIZES.width,
      marginBottom: SIZES.xxLarge
     
   },
   
   titleLogin: {
      marginVertical: 20,
      marginHorizontal: 60,
      fontFamily: "bold",
      fontSize: 35,
      color: COLORS.primary,
   },

   wrapper: {
      marginBottom: 20,
   },
   label: {
      fontFamily: "regular",
      fontSize: SIZES.xSmall,
      marginBottom: 5,
      marginEnd: 5,
      textAlign: "right"
   },
   inputWrapper: (borderColor) => ({
      borderColor: borderColor,
      backgroundColor: COLORS.lightWhite,
      borderWidth: 1,
      height: 50,
      borderRadius: 12,
      flexDirection: 'row',
      paddingHorizontal: 15,
      alignItems: "center"

   }),
   iconStyle: {
      marginRight: 10
   },
   errorMessage: {
      color: COLORS.red,
      fontFamily: "regular",
      marginTop: 5,
      marginLeft: 5,
      fontSize: SIZES.xSmall
   },
   registration: {
      marginTop: 20,
      textAlign: "center",
   },
});

export default styles;