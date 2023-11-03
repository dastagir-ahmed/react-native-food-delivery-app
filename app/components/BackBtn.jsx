import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import {COLORS, SIZES} from '../constants/theme'

const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backbtn}>
        <Ionicons
            name='chevron-back-circle'
            size={30}
            color={COLORS.primary}
        />
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    backbtn: {
        alignItems: "center",
        position: "absolute",
        zIndex: 999, 
        top: SIZES.large-10
    }
})