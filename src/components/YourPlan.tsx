import React from "react";
import {View, ViewStyle, StatusBar, Text, useWindowDimensions} from "react-native";
import SafeArea from "./SafeArea";
import Liners from "./svg/Liners";


export default function YourPlan ({style}:{style: ViewStyle}) {
    return (
        <SafeArea safeArea={true} backgroundColor="#00A3F0">
            <View style={[{flex: 1, backgroundColor: "#00A3F0", position: "relative"}, style]}>
                
                <View style={{position: "relative", marginTop: 110, transform: [{ rotate: "4deg" }]}}>
                    <Liners style={{ position: "absolute" }} color="#000" opacity={0.1}/>
                    <Liners style={{ position: "absolute", marginTop: 27 }} color="#000" opacity={0.1}/>
                </View>
                <View style={{flex: 1, backgroundColor: "#EAEEEE", marginTop: "45%", height:"100%", borderTopLeftRadius: 7, borderTopRightRadius: 7, position: "absolute", width: "100%", zIndex: 1}} />
                <View style={{position: 'absolute', marginTop: "35%", width: "100%", zIndex: 2}}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <View style={{width: "90%", backgroundColor: "#FFFFFF", height: 80, borderRadius: 5, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3}}></View>
                    </View>
                </View>
            </View>
        </SafeArea>
        
    )
}