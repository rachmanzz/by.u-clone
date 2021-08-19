import React from "react";
import {View, ViewStyle} from "react-native"

interface cardProps {
    backgroundColor?: string
    style?: ViewStyle,
    children: any
}
export default function CardField ({children,backgroundColor= "#ffffff", style={}}: cardProps) {

    return (
        <View style={[{backgroundColor: backgroundColor, width: "100%", borderRadius: 5, shadowOpacity: 0.22, shadowRadius: 2.22, shadowOffset: { width: 0, height: 1}}, style]}>
            {children}
        </View>
    )
}