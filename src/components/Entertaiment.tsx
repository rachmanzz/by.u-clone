import React from "react";
import {View, ViewStyle, StatusBar, Text, useWindowDimensions} from "react-native";
import SafeArea from "./IosSafeArea";
import Liners from "./svg/Liners";
import TextField from "./ui/TextField";
import { SvgXml } from "react-native-svg";
import HeadphoneIcon from "./svg/icons/HeadphoneIcon";
import DiscoverIcon from "./svg/icons/DiscoverIcon";
import RewardIcon from "./svg/icons/RewardIcon";
import UserSpaceIcon from "./svg/icons/UserSpaceIcon";
import miniGame from '../assets/img/miniGame.svg'
import musicPlayer from '../assets/img/musicPlayer.svg'


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
                        {/* u-coin card */}
                        <View style={{width: "100%", backgroundColor: "#FFFFFF",  borderRadius: 5, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, padding: 10}}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 5, marginRight: 5 }}>
                                <TextField size={14} type="bold">uCoin Kamu</TextField>
                                <TextField size={14} type="bold">90</TextField>
                            </View>
                            <View style={{height: 1, backgroundColor: "#EEE", margin: 5}}/>
                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <HeadphoneIcon height={30} width={30} />
                                    <TextField style={{marginTop: 5}}>Play</TextField>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <DiscoverIcon height={30} width={30}/>
                                    <TextField style={{marginTop: 5}}>Discover</TextField>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <RewardIcon height={30} width={30}/>
                                    <TextField style={{marginTop: 5}}>Rewards</TextField>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <UserSpaceIcon height={30} width={30}/>
                                    <TextField style={{marginTop: 5}}>Rewards</TextField>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingTop: "5%"}}>
                            <SvgXml width="100%" style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                
                                elevation: 3
                            }} xml={miniGame} />
                        </View>
                        <View style={{paddingTop: "5%"}}>
                            <SvgXml width="100%" style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                
                                elevation: 3
                            }} xml={musicPlayer} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeArea>
        
    )
}