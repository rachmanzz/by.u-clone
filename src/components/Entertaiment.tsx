import React from "react";
import {View, ViewStyle, StatusBar, Text, useWindowDimensions} from "react-native";
import SafeArea from "./IosSafeArea";
import Liners from "./svg/Liners";
import TextField from "./ui/TextField";
import Svg, { Path } from "react-native-svg";


export default function Entertaiment ({style}:{style: ViewStyle}) {
    return (
        <SafeArea safeArea={true} backgroundColor="#F58020">
            <View style={[{flex: 1, backgroundColor: "#F58020", position: "relative"}, style]}>
                
                <View style={{position: "relative", marginTop: 100}}>
                    <Liners style={{ position: "absolute" }} color="#000" opacity={0.1}/>
                    <Liners style={{ position: "absolute", marginTop: 27 }} color="#000" opacity={0.1}/>
                </View>
                <View style={{flex: 1, backgroundColor: "#EAEEEE", marginTop: "50%", height:"100%", borderTopLeftRadius: 7, borderTopRightRadius: 7, position: "absolute", width: "100%", zIndex: 1}} />
                <View style={{position: 'absolute', marginTop: "38%", width: "100%", zIndex: 2, paddingLeft: "5%", paddingRight: "5%"}}>
                    <View>
                        <View style={{width: "100%", justifyContent: "space-around", backgroundColor: "#FFFFFF", height: 80, borderRadius: 5, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, padding: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                                <View>
                                    <TextField size={15}>Sisa Data</TextField>
                                    <View style={{flexDirection: "row", marginTop: 5, alignItems: "center", justifyContent: "center"}}>
                                        <TextField type="bold" size={18} style={{marginRight: 5}}>0 GB</TextField> 
                                        <Svg width={24} height={24} fill="white">
                                            <Path fill="#01BCF1" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                                        </Svg>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "#EEE", height: '100%', width: 1}}/>
                                <View>
                                    <TextField size={15} >Sisa Pulsa</TextField>
                                    <View style={{flexDirection: "row", marginTop: 5, alignItems: "center", justifyContent: "center"}}>
                                        <TextField type="bold" size={18} style={{marginRight: 5}}>Rp 0</TextField> 
                                        <Svg width={24} height={24} fill="white">
                                            <Path fill="#01BCF1" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                                        </Svg>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingTop: "5%"}}>
                            <TextField type="bold" size={16}>Yang Terbaru Dari by.U</TextField>
                        </View>
                    </View>
                </View>
            </View>
        </SafeArea>
        
    )
}