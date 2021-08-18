import React from "react";
import { View, ScrollView, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YourPlan from "../components/YourPlan";

export default function HomeScreen() {
    const {width: windowWidth, height: windowHeight} = useWindowDimensions()
    return (
        <ScrollView
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
                <YourPlan style={{width: windowWidth}}/>
                <View style={{width: windowWidth, backgroundColor: "yellow"}}>
                    <Text>Helo</Text>
                </View>
        </ScrollView>
    )
} 