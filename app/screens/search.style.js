import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium, 
        height: 50,
    },
    input: {
      fontFamily: 'regular',
      width: "100%",
      height: "100%",
      paddingHorizontal: 10, 
    },
    searchImage: {
        resizeMode: "contain",
        width: "100%",
        height: SIZES.height/2.2,
        paddingHorizontal: 20
    },
    searchWrapper: {
        flex: 1,
        // marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightBlue
    },
    tile: {
        marginHorizontal: 12,
        marginBottom: 10
    }
})

export default styles