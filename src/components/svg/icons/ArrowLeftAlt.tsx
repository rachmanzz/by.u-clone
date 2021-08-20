import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default ({width=24, height=24, color="#000"}: {width?: number, height?: number, color?: string}) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path fill={color} d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"/>
    </Svg>
)