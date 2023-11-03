import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { COLORS, SIZES } from "../../constants/theme"
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ReusableShimmer = ({width, height, radius, marginRight}) => {
  return (
    <ShimmerPlaceHolder style={{width: width, height: height, borderRadius: radius, marginRight: marginRight}} shimmerColors={[  COLORS.secondary1, COLORS.secondary, COLORS.secondary1]}>
       
    </ShimmerPlaceHolder>
  )
}

export default ReusableShimmer
