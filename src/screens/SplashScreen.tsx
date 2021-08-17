import React, {useRef, useEffect, useState} from "react";
import { StyleSheet, Animated, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import GroupSelfie from "../components/svg/GroupSelfie";
const styles = StyleSheet.create({

})

export default function () {
    const backgroundScale = useRef(new Animated.Value(0)).current
    const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff")
    const [showBackGroundAnimate, setShowBackgroundAnimate] = useState<boolean>(true)
    const [showGroupSelfie, setShowGroupSelfie] = useState<boolean>(false)

    const endingAnimation = () => {

    }
    
    useEffect(()=> {
        Animated.timing(backgroundScale, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            setBackgroundColor("#00a3f0")
            setShowBackgroundAnimate(false)
            setTimeout(()=> setShowGroupSelfie(()=> true), 200)
        })
    }, [])
    return (
        <Animated.View style={{flex: 1, backgroundColor: backgroundColor, position: "relative"}}>
            {showBackGroundAnimate && <Animated.View style={[
                {
                    zIndex: 1,
                    width: 20,
                    height: 20,
                    backgroundColor: "#00a3f0",
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    borderRadius: 20,
                    transform: [
                        { scale: backgroundScale }
                    ]
                }
            ]} />}
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, zIndex: 2}}>
                <Animated.View style={{opacity: 1, zIndex: 99, marginBottom: "20%"}}>
                    <Svg width={132} height={83} viewBox="0 0 132 82" fill="none">
                        <Path
                            fillRule="evenodd"
                            fill="white"
                            clipRule="evenodd" d="M130.15 11.6263C128.635 16.8168 126.921 22.1669 125.048 27.7167C123.533 43.807 123.772 56.9428 125.566 67.164C125.725 68.1222 125.725 68.5614 126.244 69.4398C128.476 72.3943 129.154 76.3071 125.885 77.7844C121.141 79.9804 117.952 76.2672 116.557 67.4834C115.84 63.0116 115.441 58.4201 115.122 53.2297C113.368 57.4219 110.897 61.4545 108.186 64.9281C102.924 71.6357 95.47 71.516 91.6433 63.1713C87.7368 54.7069 86.8199 39.2554 89.7299 20.3702C90.6467 14.501 92.0419 11.1073 93.3972 10.0293C95.9085 7.99301 98.38 7.87323 100.612 10.149C102.645 12.1853 102.207 15.0201 99.7752 16.8966C97.8219 23.8837 97.1044 32.2284 96.9848 39.7345C96.8652 49.0374 97.8219 57.1424 99.9745 59.8974C102.845 57.2622 105.276 52.8703 107.349 48.0791C110.099 41.7708 112.93 34.2646 116.039 25.6804C117.235 17.4955 118.51 11.1871 119.906 6.71537C121.46 1.64471 124.051 -0.750875 127.479 0.207359C131.187 1.24545 131.984 5.31794 130.15 11.7062V11.6263ZM18.5359 37.8979C26.628 37.8979 33.1654 45.0048 33.1654 53.7487C33.1654 62.4926 26.628 69.5995 18.5359 69.5995C14.9882 69.5995 11.7195 68.2021 9.16831 65.9263V68.6013H0V25.6006H9.16831V41.5711C11.7195 39.2554 14.9882 37.8979 18.5359 37.8979ZM9.16831 52.7505V54.7469C9.64666 58.8194 12.8356 61.9336 16.7421 61.9336C20.9277 61.9336 24.3558 58.2604 24.3558 53.7487C24.3558 49.237 20.9277 45.5638 16.7421 45.5638C12.8356 45.5638 9.64666 48.718 9.16831 52.7505ZM56.5645 81.0584H46.8381L51.5817 69.9588L39.1846 41.092H48.911L56.2057 59.2586L64.0187 41.092H73.7451L56.5645 81.0584ZM77.0935 60.1769C80.0832 60.1769 82.4749 62.293 82.4749 64.8882C82.4749 67.4834 80.0434 69.5995 77.0935 69.5995C74.1039 69.5995 71.7121 67.4834 71.7121 64.8882C71.7121 62.293 74.1437 60.1769 77.0935 60.1769Z"/>
                    </Svg>
                </Animated.View>
                <View style={{height: 225}}>
                    {showGroupSelfie && <GroupSelfie end={endingAnimation} />}
                </View>
            </View>
            
        </Animated.View>
    )
}