import React from "react";
import {View, ViewStyle} from "react-native"

interface cardProps {
    backgroundColor?: string
    style?: ViewStyle,
    children: any,
    shadow?: { shadowColor?: string,shadowOffset?: { width?: number, height?: number  }, shadowOpacity?: number, shadowRadius?: number, elevation?: number }
}

export default function CardField ({children,backgroundColor= "#ffffff", style={}, shadow}: cardProps) {
    const shadowValue = {
        shadowColor: shadow?.shadowColor ? shadow.shadowColor : "#000",
        shadowOffset: {
            width:  shadow?.shadowOffset?.width ? shadow.shadowOffset.width : 0,
            height: shadow?.shadowOffset?.height ? shadow.shadowOffset.height : 1,
        },
        shadowOpacity: shadow?.shadowOpacity ? shadow.shadowOpacity : 0.22,
        shadowRadius: shadow?.shadowRadius ? shadow.shadowRadius : 2.22,
        elevation: shadow?.elevation ? shadow.elevation : 3,
    }
    return (
        <View style={[
            {backgroundColor, width: "100%", borderRadius: 5, ...shadowValue},
            style]}>
            {children}
        </View>
    )
}