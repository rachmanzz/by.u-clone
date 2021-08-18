import React from "react";
import Svg, { Path } from "react-native-svg";
import {useWindowDimensions, ViewStyle} from "react-native";

export default function Liners ({color, opacity, style}: {color: string, opacity: number, style: ViewStyle}) {
    const {width: windowWidth} = useWindowDimensions()
    const nextDimension = () => {
        return { width: windowWidth, height: windowWidth * (61/375) }
    }
    return (
        <Svg width={nextDimension().width + 2} height={nextDimension().height + 2} style={style} viewBox="0 0 375 61" fill="none">
            <Path fill={color} opacity={opacity} d="M111 8.4049C64.5678 12.6919 0 52.4049 0 52.4049V54.4049C0 54.4049 64.5678 14.6919 111 10.4049C171.788 4.79247 200.163 59.4672 261 54.4049C308.556 50.4477 375 10.4049 375 10.4049V8.4049C375 8.4049 308.556 48.4477 261 52.4049C200.163 57.4672 171.788 2.79247 111 8.4049Z"/>
            <Path fill={color} opacity={opacity} d="M111 12.3978C64.7027 16.5948 0 55.3978 0 55.3978V60.3978C0 60.3978 64.7027 21.5949 111 17.3978C171.689 11.8961 200.264 65.3595 261 60.3978C308.424 56.5237 375 17.3978 375 17.3978V12.3978C375 12.3978 308.424 51.5237 261 55.3978C200.264 60.3595 171.689 6.89614 111 12.3978Z"/>
            <Path fill={color} opacity={opacity} d="M111 0.397834C64.7027 4.59485 0 43.3978 0 43.3978V50.3978C0 50.3978 64.7027 11.5949 111 7.39783C171.689 1.89614 200.264 55.3595 261 50.3978C308.424 46.5237 375 7.39783 375 7.39783V0.397834C375 0.397834 308.424 39.5237 261 43.3978C200.264 48.3595 171.689 -5.10386 111 0.397834Z"/>
        </Svg>
    )
}