import React from "react";
import { Text, TextStyle } from "react-native";

interface textProps {
    type?: "black" | "black-italic" | "bold" | "bold-italic" | "italic" | "light-italic" | "light" | "medium" | 'medium-italic' | 'reguler' | 'thin' | 'thin-italic',
    children: string,
    size?: number,
    style?: TextStyle ,
    color?: string
}
const fontCollections = [
    { name: "black", font: "Roboto-Black" },
    { name: "black-italic", font: "Roboto-BlackItalic" },
    { name: "bold", font: "Roboto-Bold" },
    { name: "bold-italic", font: "Roboto-BoldItalic" },
    { name: "italic", font: "Roboto-Italic" },
    { name: "light", font: "Roboto-Light" },
    { name: "light-italic", font: "Roboto-LightItalic" },
    { name: "medium", font: "Roboto-Medium" },
    { name: "medium-italic", font: "Roboto-MediumItalic" },
    { name: "reguler", font: "Roboto-Regular" },
    { name: "thin", font: "Roboto-Thin" },
    { name: "thin-italic", font: "Roboto-ThinItalic" }
]
export default function TextField ({type="reguler", color="#000", children, size=12, style={}}: textProps) {
    const getFont: string | undefined = fontCollections.find( ({name}) => name === type)?.font
    const fontFamily = getFont ? getFont : "Roboto-Regular"

    return (<Text style={[
        {fontFamily: fontFamily, fontSize: size, color}, style
    ]}>{children}</Text>)
}