import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

function SvgTop(){
    return(
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            style={styles.svgTop}
        >
            <Rect width={400} height={270} fill="url(#a)" rx={24} />
            <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="matrix(.00332 0 0 .00457 0 -.009)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,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"
                id="b"
                width={301}
                height={223}
            />
            </Defs>
        </Svg>
    )
}

const styles = StyleSheet.create({
    svgTop: {
        position: 'absolute',
        top: 0,
    },
});


export default SvgTop;
