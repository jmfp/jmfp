import React, { useState, setState } from "react";
import { View, Text, Keyboard, TextInput  } from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";
import styles from '../constants/theme.js'

const Transaction = (props) => {
    return(
        <View style={styles.transaction}>
            <Text >{props.text}</Text>
        </View>
    )
}

export default Transaction;