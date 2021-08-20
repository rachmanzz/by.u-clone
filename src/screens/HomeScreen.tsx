import React, {useRef} from "react";
import { View, ScrollView, Animated, useWindowDimensions, Image, Platform } from "react-native";
import YourPlan from "../components/YourPlan";
import UpdatesPlan from "../components/UpdatesPlan";
import Entertaiment from "../components/Entertaiment";
import TextField from "../components/ui/TextField";
import Notification from "../components/svg/icons/Notification";

export default function HomeScreen() {
    const {width: windowWidth, height: windowHeight} = useWindowDimensions()
    const scrollX = useRef(new Animated.Value(0)).current
    const onScroll = () => {

    }

    return (
            <React.Fragment>
                <Animated.ScrollView
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ], {useNativeDriver: false})}
                    contentOffset={{x: windowWidth, y: 0}}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal>
                        <YourPlan style={{width: windowWidth}}/>
                        <UpdatesPlan style={{width: windowWidth}}/>
                        <Entertaiment style={{width: windowWidth}}/>
                </Animated.ScrollView>
                <View style={{marginTop: Platform.OS == "ios" ? 40 : 0, position: "absolute", paddingLeft: 15, paddingRight: 15, paddingTop: 15, width: "100%"}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Image style={{height: 40, width: 40}} source={require("../assets/img/profile.png")}/>
                        <View style={{paddingLeft: 10, flexGrow: 1}}>
                            <TextField color="#FFFFFF" type="bold" size={13}>Nurul Annisa</TextField>
                            <TextField color="#FFFFFF" size={13}>080-000-000-111</TextField>
                        </View>
                        <Notification color="#FFF"/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "88%", alignSelf: "center", marginTop: 20}}>
                        {/* <View>
                            <TextField color="#FFFFFF" type="medium">U-Plan</TextField>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <TextField color="#FFFFFF" type="bold">Updates</TextField>
                            <View style={{backgroundColor: "#ffffff", height: 2, width: 20, marginTop: 5}}/>
                        </View>
                        <View>
                            <TextField color="#FFFFFF" type="medium">U-Tainment</TextField>
                        </View> */}
                        {
                            ["U-Plan", "Updates", "U-Tainment"].map((item: string, index: number) => {
                                const inputRange = [ windowWidth * (index - 1), windowWidth * index, windowWidth * (index + 1) ]
                                const width = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [ 0, 30, 0 ],
                                    extrapolate: "clamp"
                                })
                                const scale = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [ 1, 1.1, 1 ],
                                    extrapolate: "clamp"
                                })
                                return (
                                    <View key={index} style={{alignItems: "center"}}>
                                        <Animated.Text style={{ fontFamily: "Roboto-Bold", color: "#FFF", transform: [{ scale }]}}>{item}</Animated.Text>
                                        <Animated.View style={{backgroundColor: "#ffffff", height: 2, width: width, marginTop: 5}}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </React.Fragment>
    )
} 