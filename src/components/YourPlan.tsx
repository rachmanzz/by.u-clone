import React from "react";
import {View, ViewStyle, StatusBar, Text, useWindowDimensions} from "react-native";
import SafeArea from "./IosSafeArea";
import Liners from "./svg/Liners";
import TextField from "./ui/TextField";
import Svg, { Path } from "react-native-svg";
import DataIcon from "./svg/icons/DataIcon";
import CardField from "./ui/CardField";
import ArrowLeftAlt from "./svg/icons/ArrowLeftAlt";
import * as Progress from 'react-native-progress';


export default function YourPlan ({style}:{style: ViewStyle}) {
    return (
        <SafeArea safeArea={true} backgroundColor="#0396C9">
            <View style={[{flex: 1, backgroundColor: "#0396C9", position: "relative"}, style]}>
                
                <View style={{position: "relative", marginTop: 100}}>
                    <Liners style={{ position: "absolute" }} color="#000" opacity={0.1}/>
                    <Liners style={{ position: "absolute", marginTop: 27 }} color="#000" opacity={0.1}/>
                </View>
                {/*  */}
                <View style={{flex: 1, backgroundColor: "#EAEEEE", marginTop: "50%", height:"100%", borderTopLeftRadius: 7, borderTopRightRadius: 7, position: "absolute", width: "100%", zIndex: 1}} />
                <View style={{position: 'absolute', marginTop: "38%", width: "100%", zIndex: 2, paddingLeft: "5%", paddingRight: "5%"}}>
                    <View>
                        <View style={{width: "100%", backgroundColor: "#FFFFFF",  borderRadius: 5, shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, padding: 10}}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 5, marginRight: 5 }}>
                                <TextField size={14} type="bold">Pulsa Kamu</TextField>
                                <TextField size={14} type="bold">Rp. 0</TextField>
                            </View>
                            <View style={{height: 1, backgroundColor: "#EEE", margin: 5}}/>
                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <DataIcon width={35} height={35}/>
                                    <TextField style={{marginTop: 5}}>Beli Data</TextField>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <DataIcon width={35} height={35}/>
                                    <TextField style={{marginTop: 5}}>Beli Topping</TextField>
                                </View>
                                <View style={{backgroundColor: "#DDE2E8", height: '100%', width: 1}}/>
                                <View style={{justifyContent: "center", alignItems: "center"}}>
                                    <DataIcon width={35} height={35}/>
                                    <TextField style={{marginTop: 5}}>Beli Pulsa</TextField>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingTop: "5%"}}>
                            <CardField style={{padding: 10}}>
                                <View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 5, marginRight: 5 }}>
                                        <TextField size={14} type="bold">Rincian pemakaian</TextField>
                                        <View style={{flexDirection: "row", alignItems: 'center', justifyContent: "center"}}>
                                            <TextField style={{marginRight: 5}}>Lihat Detail</TextField>
                                            <ArrowLeftAlt color="#0BB8E9"/>
                                        </View>
                                    </View>
                                    <View style={{marginTop: 13}}>
                                        <View style={{flexDirection: "row", alignItems: 'center', alignContent: 'center', marginBottom: 15}}>
                                            <DataIcon />
                                            <View style={{paddingLeft: 10, flexGrow: 1}}>
                                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                                    <TextField>Sisa Total Data</TextField>
                                                    <TextField>0 GB</TextField>
                                                </View>
                                                <Progress.Bar progress={0.3} width={null} />
                                            </View>
                                        </View>
                                        <View style={{flexDirection: "row", alignItems: 'center', alignContent: 'center', marginBottom: 15}}>
                                            <DataIcon />
                                            <View style={{paddingLeft: 10, flexGrow: 1}}>
                                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                                    <TextField>Sisa Topping</TextField>
                                                    <TextField>0 GB</TextField>
                                                </View>
                                                <Progress.Bar progress={0.3} width={null} />
                                            </View>
                                        </View>
                                        <View style={{flexDirection: "row", alignItems: 'center', alignContent: 'center'}}>
                                            <DataIcon />
                                            <View style={{paddingLeft: 10, flexGrow: 1}}>
                                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                                    <TextField>Sisa Telfon</TextField>
                                                    <TextField>0 Menit</TextField>
                                                </View>
                                                <Progress.Bar progress={0.3} width={null} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardField>
                        </View>
                    </View>
                </View>
            </View>
        </SafeArea>
        
    )
}