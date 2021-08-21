import React, {useRef} from "react";
import {View, ViewStyle, Animated, useWindowDimensions, Platform} from "react-native";
import SafeArea from "./IosSafeArea";
import Liners from "./svg/Liners";
import TextField from "./ui/TextField";
import Svg, { Path, SvgUri, Image } from "react-native-svg";
import discovery from "../assets/img/Discovery.svg";
import promo from "../assets/img/promo.svg";
import referral from "../assets/img/referral.svg";
import topping from "../assets/img/topping.svg";
import { SvgXml } from 'react-native-svg';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';


export default function UpdatesPlan ({style}:{style: ViewStyle}) {
    const {height: windowHeight} = useWindowDimensions()
    const srollY = useRef(new Animated.Value(0)).current
    const flatListHeight = windowHeight - (windowHeight * (31/100))
    const data = [
        {
            xml: promo
        },
        {
            xml: referral
        },
        {
            xml: discovery
        },
        {
            xml: topping
        },
    ]
    const renderItem = ({index, item}: {index: number, item: {xml: string}}) => {
        const inputRange = [
            -1, 0, index * 150, 150 * (index + 1)]
        const opacity = srollY.interpolate({
            inputRange,
            outputRange: [1,1, 1, 0]
        })
        const residu = Platform.OS === "ios" ? flatListHeight % 150 : flatListHeight % 161
        return (
            <Animated.View key={index} style={{opacity, marginBottom: (data.length -1) === index ? (residu/data.length) : Platform.OS === "ios" ? 10 : 0, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3}}>
                <SvgXml width="100%" xml={item.xml} />
            </Animated.View>
        )
    }
    return (
        <SafeArea safeArea={true} backgroundColor="#00A3F0">
            <View style={[{flex: 1, backgroundColor: "#00A3F0", position: "relative"}, style]}>
                
                <View style={{position: "relative", marginTop: 100}}>
                    <Liners style={{ position: "absolute" }} color="#FFF" opacity={0.1}/>
                    <Liners style={{ position: "absolute", marginTop: 27 }} color="#FFF" opacity={0.1}/>
                </View>
                <View style={{flex: 1, backgroundColor: "#EAEEEE", marginTop: "50%", height:"100%", borderTopLeftRadius: 7, borderTopRightRadius: 7, position: "absolute", width: "100%", zIndex: 1}} />
                <View style={{position: 'absolute', marginTop: "38%", width: "100%", zIndex: 2, paddingLeft: "6%", paddingRight: "6%"}}>
                    <View>
                        <View style={{width: "100%", justifyContent: "space-around", backgroundColor: "#FFFFFF", borderRadius: 5, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, padding: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                                <View>
                                    <TextField size={15}>Sisa Data</TextField>
                                    <View style={{flexDirection: "row", marginTop: 5, alignItems: "center", justifyContent: "center"}}>
                                        <TextField type="bold" size={18} style={{marginRight: 5}}>5 GB</TextField> 
                                        <Svg width={24} height={24} fill="white">
                                            <Path fill="#01BCF1" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                                        </Svg>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
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
                        <View style={{paddingTop: "5%", height: Platform.OS === "ios" ? flatListHeight - 30 : flatListHeight}}>
                            <TextField type="bold" size={16}>Yang Terbaru Dari by.U</TextField>
                            <Animated.FlatList 
                                data={data.map((item) => ({...item, id: uuidv4()}) )}
                                style={{marginTop: 5}}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { y: srollY } } }],
                                    {useNativeDriver: true}
                                )}
                                contentContainerStyle={{padding: 0}}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeArea>
        
    )
}