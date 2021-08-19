import React from "react";
import { View, ScrollView, StatusBar, useWindowDimensions, Image } from "react-native";
import YourPlan from "../components/YourPlan";
import UpdatesPlan from "../components/UpdatesPlan";
import Entertaiment from "../components/Entertaiment";
import TextField from "../components/ui/TextField";
import Notification from "../components/svg/icons/Notification";

export default function HomeScreen() {
    const {width: windowWidth, height: windowHeight} = useWindowDimensions()
    return (
            <React.Fragment>
                <ScrollView
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal>
                        <UpdatesPlan style={{width: windowWidth}}/>
                        <Entertaiment style={{width: windowWidth}}/>
                </ScrollView>
                <View style={{marginTop: StatusBar.currentHeight || 40, position: "absolute", paddingLeft: 15, paddingRight: 15, paddingTop: 15, width: "100%"}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Image style={{height: 40, width: 40}} source={require("../assets/img/profile.png")}/>
                        <View style={{paddingLeft: 10, flexGrow: 1}}>
                            <TextField color="#FFFFFF" type="bold" size={13}>Nurul Annisa</TextField>
                            <TextField color="#FFFFFF" size={13}>080-000-000-111</TextField>
                        </View>
                        <Notification color="#FFF"/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "88%", alignSelf: "center", marginTop: 20}}>
                        <View>
                            <TextField color="#FFFFFF" type="medium">U-Plan</TextField>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <TextField color="#FFFFFF" type="bold">Updates</TextField>
                            <View style={{backgroundColor: "#ffffff", height: 2, width: 20, marginTop: 5}}/>
                        </View>
                        <View>
                            <TextField color="#FFFFFF" type="medium">U-Tainment</TextField>
                        </View>
                    </View>
                </View>
            </React.Fragment>
    )
} 