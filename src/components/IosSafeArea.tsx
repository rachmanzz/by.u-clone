import React from "react";
import { Platform, View, StatusBar } from "react-native";


const IosContent = ({safeArea=true, backgroundColor= "#0967AB", children}: {safeArea?: boolean, backgroundColor?: string, children: any}) => {
    return (
        <View>
            {safeArea && <View style={{backgroundColor, height: StatusBar.currentHeight || 40}}/>}
            <View style={{flex: 1}}>{children}</View>
        </View>
    )
}
export default function IosSafeArea({children, ...props}: {safeArea?: boolean, backgroundColor?: string, children: any}) {
    return (
        <React.Fragment>
            {Platform.OS === "ios" ?  <IosContent {...props}>{children}</IosContent> : children}
        </React.Fragment>
    )
} 