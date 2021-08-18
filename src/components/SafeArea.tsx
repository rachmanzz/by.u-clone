import React from "react";
import { StatusBar, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const IosContent = ({safeArea=true, backgroundColor= "#0967AB", children}: {safeArea?: boolean, backgroundColor?: string, children: any}) => {
    return (
        <View>
            {safeArea && <View style={{backgroundColor, height: 40}}/>}
            <View style={{flex: 1}}>{children}</View>
        </View>
    )
}
const AndroidContent = ({safeArea=true, backgroundColor= "#0967AB", children}: {safeArea?: boolean, backgroundColor?: string, children: any}) => {
    return (
        <View>
            <StatusBar backgroundColor={backgroundColor} barStyle="light-content" networkActivityIndicatorVisible={false}/>
            {safeArea ? <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>: children}
        </View>
    )
}

export default function SafeArea({children, ...props}: {safeArea?: boolean, backgroundColor?: string, children: any}) {
    return (
        <React.Fragment>
            {Platform.OS === "ios" ?  <IosContent {...props}>{children}</IosContent> : <AndroidContent {...props}>{children}</AndroidContent>}
        </React.Fragment>
    )
} 