import React, {useEffect, useRef} from "react";
import { Animated } from "react-native";
import Svg, { Path, G, Rect, ClipPath, Defs } from "react-native-svg";
export default function GroupSelfie() {
    const GroupAnimate = Animated.createAnimatedComponent(G)
    const PathAnimate = Animated.createAnimatedComponent(Path)

    const lineOpacity = useRef(new Animated.Value(0)).current
    const grassOpacity = useRef(new Animated.Value(0)).current
    const blueSuitOpacity = useRef(new Animated.Value(0)).current
    const yellowShirtOpacity = useRef(new Animated.Value(0)).current
    const whiteShirtOpacity = useRef(new Animated.Value(0)).current
    const orangeShirtOpacity = useRef(new Animated.Value(0)).current

    const LinePathOpacity = () => {
        Animated.timing(lineOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: false
        }).start(setGrassOpacity)
    }

    const setGrassOpacity = () => {
        Animated.timing(grassOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start(showBlueSuit)
    }
    const showBlueSuit = () => {
        Animated.timing(blueSuitOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false
        }).start(showYellowShirt)
    }
    const showYellowShirt = () => {
        Animated.timing(yellowShirtOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false
        }).start(showWhiteShirt)
    }
    const showWhiteShirt = () => {
        Animated.timing(whiteShirtOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false
        }).start(showOrangeShirt)
    }
    const showOrangeShirt = () => {
        Animated.timing(orangeShirtOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }
    useEffect(LinePathOpacity, [])
    return (
        <Svg width={345} height={225} style={{alignSelf: "center"}} viewBox="0 0 345 225" fill="none">
            <G clipPath="url(#scane1)">
                <GroupAnimate opacity={grassOpacity} id="grass">
                    <Path
                        fill="#1E858C"
                        d="M298.522 185.154C298.343 191.833 297.222 198.453 295.193 204.82C295.148 204.968 295.098 205.113 295.049 205.261H282.625C282.638 205.128 282.652 204.981 282.665 204.82C283.493 195.313 278.761 138.142 273.051 128.248C273.551 129.05 299.485 154.947 298.522 185.154Z"
                        />
                    <Path 
                        fill="#1E858C"
                        d="M297.59 204.82C297.486 204.968 297.378 205.115 297.267 205.261H287.947C288.017 205.135 288.099 204.987 288.194 204.82C289.734 202.046 294.291 193.752 298.521 185.154C303.065 175.914 307.238 166.324 306.886 162.853C306.995 163.635 310.141 187.5 297.59 204.82Z"
                        />
                    <Path 
                        fill="#1E858C"
                        d="M328.857 194.238C328.759 197.899 328.144 201.529 327.032 205.019C327.007 205.1 326.98 205.18 326.953 205.261H320.142C320.149 205.188 320.157 205.107 320.164 205.019C320.618 199.807 318.024 168.465 314.893 163.041C315.167 163.481 329.385 177.678 328.857 194.238Z"
                        />
                    <Path 
                        fill="#1E858C"
                        d="M328.346 205.019C328.289 205.1 328.23 205.181 328.169 205.261H323.059C323.098 205.192 323.143 205.111 323.195 205.019C324.039 203.498 326.538 198.951 328.857 194.238C331.348 189.172 333.635 183.915 333.443 182.012C333.502 182.441 335.227 195.524 328.346 205.019Z"
                        />
                    <Path 
                        fill="#1E858C"
                        d="M264.518 194.238C264.42 197.899 263.806 201.529 262.693 205.019C262.668 205.1 262.641 205.18 262.614 205.261H255.804C255.811 205.188 255.818 205.107 255.825 205.019C256.279 199.807 253.685 168.465 250.555 163.041C250.829 163.481 265.046 177.678 264.518 194.238Z"
                        />
                    <Path 
                        fill="#1E858C"
                        d="M264.007 205.019C263.95 205.1 263.891 205.181 263.83 205.261H258.721C258.759 205.192 258.804 205.111 258.856 205.019C259.7 203.498 262.199 198.951 264.518 194.238C267.009 189.172 269.297 183.915 269.104 182.012C269.164 182.441 270.888 195.524 264.007 205.019Z"
                        />
                </GroupAnimate>
                
                <GroupAnimate opacity={blueSuitOpacity} id="bluesuit">
                    <Path
                        fill="#FFB7B7"
                        d="M141.533 198.569H148.082L151.198 173.351L141.532 173.352L141.533 198.569Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M139.863 196.434L152.76 196.434H152.761C154.941 196.434 157.031 197.298 158.573 198.837C160.114 200.376 160.98 202.463 160.98 204.639V204.905L139.863 204.906L139.863 196.434Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M106.075 198.569H112.624L115.739 173.351L106.073 173.352L106.075 198.569Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M104.404 196.434L117.301 196.434H117.302C119.482 196.434 121.572 197.298 123.114 198.837C124.655 200.376 125.521 202.463 125.521 204.639V204.905L104.404 204.906L104.404 196.434Z"
                        />
                    <Path
                        fill="#061E25"
                        d="M103.406 84.2773V150.86L105.095 193.843H119.025L123.668 112.933L132.955 146.224L138.865 193L155.75 192.157L144.353 84.2773H103.406Z"
                        />
                    <Path
                        fill="#FFB8B8"
                        d="M119.6 24.4376C125.195 24.4376 129.731 19.9095 129.731 14.3238C129.731 8.73816 125.195 4.21008 119.6 4.21008C114.005 4.21008 109.469 8.73816 109.469 14.3238C109.469 19.9095 114.005 24.4376 119.6 24.4376Z"
                        />
                    <Path
                        fill="#EAEEEE"
                        d="M115.39 27.0724L112.693 29.916L110.16 86.806L140.131 85.963L132.955 36.2373L126.623 30.1796L123.411 27.0724H115.39Z"
                        />
                    <Path
                        fill="#174882"
                        d="M110.582 33.2871L112.857 29.6011L113.537 37.5012C113.537 37.5012 119.025 55.2002 118.603 70.7923C118.181 86.3843 120.713 123.047 117.336 123.468C113.959 123.889 99.6069 124.732 99.6069 121.782C99.6069 118.833 98.7626 40.451 98.7626 40.451L110.582 33.2871Z"
                        />
                    <Path
                        fill="#174882"
                        d="M125.943 29.6011L131.689 34.1299L144.353 38.7654C144.353 38.7654 144.353 92.7054 146.886 105.348C149.418 117.99 154.062 119.254 148.152 119.675C142.242 120.097 142.664 117.99 142.664 117.99C142.664 117.99 146.886 96.9194 141.398 92.7054C135.91 88.4913 125.357 64.0497 126.201 50.5647C127.045 37.0797 125.099 29.6011 125.943 29.6011Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M110.015 17.4881C110.015 17.4881 110.876 15.979 110.676 10.9377C110.476 5.89647 118.166 8.74774 124.591 8.26683C131.017 7.78592 129.657 16.6834 129.657 16.6834C129.657 16.6834 130.12 16.1545 131.113 11.8603C132.105 7.56613 129.852 3.28682 129.852 3.28682C129.188 -1.22555 125.611 0.220666 125.611 0.220666C127.334 0.890095 127.003 2.32149 127.003 2.32149C125.545 -0.230577 121.968 1.21565 121.968 1.21565C117.198 -1.77281 112.363 2.16262 112.363 2.16262C106.6 3.4683 109.98 8.04352 109.98 8.04352C104.184 10.9674 110.015 17.4881 110.015 17.4881Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M99.6211 115.689C100.05 115.236 100.375 114.694 100.572 114.103C100.769 113.511 100.834 112.883 100.762 112.263C100.69 111.644 100.482 111.048 100.154 110.517C99.826 109.986 99.3854 109.533 98.8633 109.191L100.688 99.6136L95.1285 97.0869L92.7416 110.648C92.2235 111.562 92.0591 112.634 92.2797 113.661C92.5004 114.687 93.0906 115.598 93.9386 116.219C94.7865 116.84 95.8334 117.13 96.8807 117.032C97.928 116.934 98.9031 116.456 99.6211 115.689V115.689Z"
                        />
                    <Path
                        fill="#174882"
                        d="M100.873 40.451L99.7524 39.8511C99.7524 39.8511 93.6971 42.1366 94.1192 43.8223C94.5413 45.5079 90.7421 104.505 92.0085 106.612C93.2749 108.719 103.406 107.033 103.406 107.033L100.873 40.451Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M149.063 111.717C148.575 111.328 148.178 110.836 147.901 110.277C147.624 109.718 147.473 109.105 147.459 108.482C147.444 107.858 147.567 107.239 147.818 106.668C148.07 106.097 148.443 105.588 148.913 105.177L145.778 95.9436L150.934 92.6733L155.178 105.775C155.818 106.608 156.129 107.647 156.053 108.694C155.977 109.741 155.518 110.725 154.765 111.457C154.011 112.19 153.014 112.621 151.963 112.668C150.913 112.716 149.881 112.378 149.063 111.717V111.717Z"
                        />
                    <Path
                        fill="#174882"
                        d="M144.115 103.667C144.115 103.667 154.382 103.937 155.344 101.676C156.307 99.4139 144.367 41.5093 144.551 39.7816C144.736 38.0538 138.422 36.6267 138.422 36.6267L137.395 37.3756L144.115 103.667Z"
                        />
                </GroupAnimate>

                <GroupAnimate opacity={yellowShirtOpacity} id="yellowshirt">
                    <Path
                        fill="#FFB7B7"
                        d="M189.494 106.273L183.137 75.1785L180.345 52.2124L174.159 56.2074L175.013 81.5162L184.887 107.738C184.57 108.342 184.439 109.026 184.512 109.703C184.585 110.381 184.859 111.021 185.297 111.544C185.736 112.066 186.32 112.446 186.976 112.636C187.632 112.825 188.329 112.816 188.979 112.609C189.63 112.402 190.204 112.007 190.629 111.473C191.053 110.94 191.31 110.292 191.365 109.613C191.42 108.934 191.271 108.254 190.938 107.659C190.605 107.064 190.102 106.581 189.494 106.273H189.494Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M130.041 108.677L131.801 76.9905L131.218 53.8631L139.396 56.9177L140.761 82.0814L134.812 109.458C135.214 110.009 135.443 110.667 135.469 111.348C135.496 112.029 135.319 112.702 134.961 113.283C134.603 113.863 134.08 114.324 133.459 114.607C132.838 114.89 132.147 114.982 131.473 114.871C130.799 114.761 130.174 114.453 129.676 113.987C129.178 113.521 128.83 112.917 128.676 112.253C128.523 111.589 128.571 110.895 128.814 110.258C129.057 109.621 129.484 109.071 130.041 108.677V108.677Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M147.169 200.801H151.348L153.337 184.71L147.169 184.71L147.169 200.801Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M146.104 199.439L154.333 199.438H154.334C155.725 199.439 157.059 199.99 158.042 200.972C159.026 201.954 159.578 203.286 159.578 204.674V204.844L146.104 204.845L146.104 199.439Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M162.998 198.955L167.127 199.593L171.557 183.994L165.461 183.053L162.998 198.955Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M162.153 197.446L170.286 198.702L170.286 198.702C171.661 198.914 172.895 199.663 173.716 200.784C174.538 201.904 174.88 203.304 174.667 204.677L174.641 204.845L161.325 202.788L162.153 197.446Z"
                        />
                    <Path
                        fill="#174882"
                        d="M145.942 195.997L145.92 195.88L130.792 114.227C129.591 107.671 130.549 100.904 133.522 94.9381L142.679 76.6565L170.001 80.3517L173.226 103.627L184.717 148.028L184.705 148.064L169.983 194.749L160.334 195.383L168.881 153.71L153.231 118.225L154.335 195.362L145.942 195.997Z"
                        />
                    <Path
                        fill="#FED912"
                        d="M170.637 83.3304L170.457 83.0483C170.425 82.9975 167.106 78.0059 158.074 81.3387C148.855 84.7416 141.711 78.1692 141.64 78.1024L141.605 78.0691L139.517 59.4914L137.052 44.41L144.898 43.0359L148.755 40.7256L164.094 40.4529L168.131 43.6222L174.758 44.3431L175.364 58.085L175.362 58.1L170.637 83.3304Z"
                        />
                    <Path
                        fill="#FED912"
                        d="M172.836 59.4142V47.6474L174.699 44.2523L174.775 44.25C176.242 44.3046 177.628 44.9335 178.635 46.0006C180.509 47.9019 181.358 51.0695 181.158 55.4154L181.155 55.4949L172.836 59.4142Z"
                        />
                    <Path
                        fill="#FED912"
                        d="M140.354 58.1353L130.855 56.9973L130.848 56.8881C130.524 52.1597 131.351 48.6498 133.305 46.4561C134.286 45.2828 135.678 44.5264 137.197 44.3404L137.252 44.3379L139.823 46.6713L140.354 58.1353Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M167.849 35.7116H142.855C142.341 35.711 141.848 35.5069 141.485 35.144C141.121 34.781 140.917 34.289 140.916 33.7758V24.7418C140.913 22.8472 141.284 20.9706 142.008 19.2194C142.732 17.4681 143.795 15.8766 145.136 14.5358C146.477 13.195 148.069 12.1313 149.822 11.4056C151.575 10.6798 153.455 10.3063 155.352 10.3063C157.25 10.3063 159.129 10.6798 160.882 11.4056C162.635 12.1313 164.228 13.195 165.569 14.5358C166.91 15.8766 167.973 17.4681 168.697 19.2194C169.421 20.9706 169.792 22.8472 169.788 24.7418V33.7758C169.788 34.289 169.583 34.7811 169.22 35.144C168.856 35.5069 168.363 35.711 167.849 35.7116V35.7116Z"
                        />
                    <Path
                        fill="#FFB7B7"
                        d="M155.933 35.6227C161.778 35.6227 166.517 30.8922 166.517 25.0568C166.517 19.2214 161.778 14.4909 155.933 14.4909C150.087 14.4909 145.349 19.2214 145.349 25.0568C145.349 30.8922 150.087 35.6227 155.933 35.6227Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M165.993 25.3871H152.019C151.757 25.3867 151.503 25.2908 151.307 25.1174C151.11 24.9439 150.983 24.7048 150.95 24.4447L150.769 23C150.752 22.8611 150.69 22.7316 150.592 22.631C150.495 22.5304 150.367 22.4643 150.229 22.4425C150.09 22.4207 149.948 22.4445 149.824 22.5103C149.701 22.5761 149.602 22.6803 149.542 22.8072L148.626 24.7665C148.539 24.9517 148.401 25.1083 148.228 25.2181C148.055 25.328 147.855 25.3866 147.65 25.387H145.527C145.377 25.3871 145.229 25.3558 145.091 25.2952C144.954 25.2345 144.831 25.1459 144.73 25.035C144.629 24.9241 144.552 24.7933 144.505 24.6511C144.458 24.5088 144.441 24.3583 144.455 24.2091L145.292 15.4822C145.31 15.2955 145.376 15.1166 145.484 14.9631C145.592 14.8095 145.738 14.6866 145.908 14.6063C152.307 11.6239 158.797 11.6277 165.196 14.6176C165.358 14.6938 165.499 14.8091 165.605 14.9533C165.712 15.0974 165.781 15.2658 165.806 15.4431L167.059 24.1587C167.081 24.3113 167.07 24.4668 167.027 24.6147C166.983 24.7627 166.908 24.8995 166.807 25.016C166.706 25.1326 166.581 25.226 166.441 25.29C166.3 25.354 166.147 25.3871 165.993 25.3871H165.993Z"
                        />
                </GroupAnimate>
                <GroupAnimate opacity={whiteShirtOpacity} id="whiteshirt">
                    <Path
                        fill="#9F616A"
                        d="M171.742 107.261C172.275 107.073 172.76 106.77 173.163 106.375C173.566 105.979 173.877 105.5 174.075 104.971C174.272 104.443 174.351 103.877 174.306 103.315C174.261 102.753 174.093 102.207 173.814 101.716L182.873 91.407L175.801 90.433L168.282 100.372C167.488 100.895 166.913 101.691 166.667 102.608C166.421 103.526 166.521 104.502 166.947 105.351C167.374 106.2 168.098 106.863 168.981 107.215C169.865 107.567 170.847 107.584 171.742 107.261V107.261Z"
                        />
                    <Path
                        fill="#9F616A"
                        d="M182.668 198.629L176.349 198.628L173.344 174.3L182.669 174.3L182.668 198.629Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M184.279 204.743L163.906 204.742V204.485C163.907 202.385 164.742 200.372 166.229 198.888C167.716 197.403 169.733 196.569 171.836 196.569H171.836L184.279 196.569L184.279 204.743Z"
                        />

                    <Path
                        fill="#9F616A"
                        d="M215.742 193.35L209.708 195.221L199.61 172.876L208.516 170.116L215.742 193.35Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M219.097 198.712L199.64 204.743L199.564 204.497C198.94 202.492 199.14 200.322 200.119 198.464C201.099 196.606 202.777 195.213 204.785 194.59L204.786 194.59L216.669 190.907L219.097 198.712Z"
                        />
                    <Path
                        fill="#E6E6E6"
                        d="M177.829 86.4637L168.472 97.1621L175.798 97.8202L177.829 86.4637Z"
                        />
                    <Path
                        d="M174.173 100.254C174.173 100.254 170.923 101.876 170.516 109.177C170.11 116.478 171.735 135.542 171.735 135.542C171.735 135.542 170.11 144.059 171.735 151.765C173.36 159.471 170.11 187.456 172.142 187.456C174.173 187.456 184.736 188.673 185.143 187.456C185.549 186.239 185.955 167.987 185.955 167.987C185.955 167.987 189.206 158.659 185.955 152.982C185.955 152.982 197.304 172.765 204.644 187.862C206.251 191.167 218.458 187.457 216.427 183.806C214.395 180.156 209.52 163.527 209.52 163.527C209.52 163.527 205.863 151.359 199.363 146.087L202.613 120.129C202.613 120.129 209.52 102.688 205.458 100.255C201.396 97.8214 174.173 100.254 174.173 100.254Z"
                        fill="#2F2E41"
                        />
                    <Path
                        fill="#A0616A"
                        d="M186.361 34.1421C192.195 34.1421 196.925 29.4209 196.925 23.5969C196.925 17.773 192.195 13.0517 186.361 13.0517C180.527 13.0517 175.798 17.773 175.798 23.5969C175.798 29.4209 180.527 34.1421 186.361 34.1421Z"
                        />
                    <Path
                        fill="#E5E5E5"
                        d="M198.144 34.9534L185.012 42.6595C185.012 42.6595 179.983 45.4863 178.105 50.3656C176.103 55.5656 177.266 62.8872 178.105 64.5612C179.73 67.806 177.423 75.9177 177.423 75.9177L175.392 94.5746C175.392 94.5746 168.079 101.469 173.767 102.281C179.455 103.092 189.612 101.875 195.706 102.281C201.801 102.686 208.707 103.498 206.676 99.4408C204.645 95.384 202.207 92.5456 204.645 84.4355C206.552 78.0879 206.47 54.3545 206.344 44.3316C206.326 42.9552 205.956 41.6061 205.269 40.4126C204.582 39.2192 203.601 38.221 202.418 37.5131L198.144 34.9534Z"
                        />
                    <Path
                        fill="black"
                        opacity={0.1}
                        d="M192.254 47.7299L193.473 72.4707L181.661 96.35L179.658 95.589L191.846 73.2816L192.254 47.7299Z"
                        />
                    <Path
                        fill="black"
                        opacity={0.1}
                        d="M205.66 77.7429V74.903L191.848 97.6168L205.66 77.7429Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M178.864 13.8281L177.119 13.1312C177.119 13.1312 180.771 9.11808 185.851 9.46692L184.422 7.89653C184.422 7.89653 187.914 6.50077 191.09 10.1646C192.759 12.0908 194.69 14.355 195.895 16.9051H197.765L196.985 18.621L199.717 20.3368L196.913 20.0298C197.178 21.5111 197.087 23.0342 196.647 24.4735L196.724 25.8297C196.724 25.8297 193.472 20.8065 193.472 20.1096V21.8546C193.472 21.8546 191.726 20.2842 191.726 19.2373L190.773 20.4588L190.297 18.54L184.423 20.4588L185.375 18.8877L181.723 19.4112L183.152 17.4923C183.152 17.4923 179.024 19.7604 178.865 21.68C178.707 23.5996 176.643 26.0419 176.643 26.0419L175.69 24.2969C175.69 24.2969 174.262 16.4454 178.864 13.8281Z"
                        />
                    <Path
                        fill="#9F616A"
                        d="M185.698 108.409C186.189 108.129 186.613 107.745 186.939 107.284C187.265 106.824 187.486 106.297 187.587 105.742C187.687 105.187 187.664 104.616 187.52 104.071C187.375 103.526 187.113 103.018 186.751 102.585L193.833 90.8341L186.701 91.1287L181.069 102.243C180.38 102.898 179.956 103.783 179.877 104.729C179.798 105.676 180.069 106.618 180.64 107.378C181.211 108.138 182.041 108.663 182.973 108.853C183.905 109.043 184.875 108.885 185.698 108.409V108.409Z"
                        />
                    <Path
                        fill="#E5E5E5"
                        d="M201.801 40.2268L204.848 39.6185C204.848 39.6185 213.989 46.3107 211.145 59.695C208.301 73.0793 195.706 93.3589 195.706 93.3589C195.706 93.3589 192.862 97.0093 192.05 97.8202C191.238 98.6311 189.612 97.8202 190.425 99.0371C191.237 100.254 189.206 101.065 189.206 101.065C189.206 101.065 180.267 101.065 181.08 97.8202C181.893 94.5754 195.706 71.4552 195.706 71.4552L193.675 49.9592C193.675 49.9592 192.049 39.4155 201.801 40.2268Z"
                        />
                </GroupAnimate>
                <PathAnimate
                    opacity={lineOpacity}
                    fill="#FFFFFF"
                    d="M344.55 205.71H69.6486C69.5293 205.71 69.4148 205.663 69.3304 205.578C69.2461 205.494 69.1987 205.38 69.1987 205.261C69.1987 205.142 69.2461 205.027 69.3304 204.943C69.4148 204.859 69.5293 204.812 69.6486 204.812H344.55C344.669 204.812 344.784 204.859 344.868 204.943C344.953 205.027 345 205.142 345 205.261C345 205.38 344.953 205.494 344.868 205.578C344.784 205.663 344.669 205.71 344.55 205.71Z"
                    />
                <GroupAnimate opacity={orangeShirtOpacity} id="orangeshirt">
                    <Path
                        fill="#3F3D56"
                        d="M7.24685 18.7609V18.9155H3.00475C2.35358 18.9155 1.72909 19.1737 1.26864 19.6334C0.808201 20.093 0.54953 20.7164 0.54953 21.3665V30.3385C0.54953 30.9885 0.808201 31.612 1.26864 32.0716C1.72909 32.5313 2.35358 32.7895 3.00475 32.7895H26.2772C26.9283 32.7895 27.5528 32.5313 28.0133 32.0716C28.4737 31.612 28.7324 30.9885 28.7324 30.3385V21.3665C28.7324 20.7164 28.4737 20.093 28.0133 19.6334C27.5528 19.1737 26.9283 18.9155 26.2772 18.9155H10.2664V18.7609L7.24685 18.7609Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M68.9315 56.0258C69.03 69.2667 60.5552 67.2642 50.2226 67.2642C39.8899 67.2642 32.4145 69.2365 31.5136 56.0258C30.0821 35.0336 35.6052 19.3134 50.2226 19.3134C65.3435 19.3134 68.7753 35.0336 68.9315 56.0258Z"
                        />
                    <Path
                        fill="#A0616A"
                        d="M12.3418 27.9408C12.6757 28.6152 12.8574 29.3544 12.8742 30.1064C12.8909 30.8585 12.7422 31.6051 12.4387 32.2936C12.1351 32.982 11.684 33.5957 11.1172 34.0914C10.5504 34.587 9.88156 34.9525 9.1579 35.1622L8.21508 53.4233L0.54924 47.7908L2.61981 31.3133C2.34752 30.0764 2.53922 28.7827 3.15858 27.6774C3.77793 26.5721 4.78191 25.732 5.98027 25.3163C7.17864 24.9005 8.48813 24.9381 9.66061 25.4218C10.8331 25.9055 11.7871 26.8018 12.3418 27.9408V27.9408Z"
                        />
                    <Path
                        fill="#A0616A"
                        d="M81.4689 131.141C81.8849 130.514 82.158 129.803 82.2691 129.059C82.3802 128.315 82.3265 127.556 82.1119 126.835C81.8972 126.114 81.5268 125.448 81.0267 124.886C80.5266 124.323 79.9091 123.876 79.2175 123.578L80.5765 105.343L72.2635 109.971L72.2474 126.578C71.8219 127.771 71.8495 129.078 72.3251 130.252C72.8007 131.426 73.6912 132.386 74.8279 132.948C75.9645 133.511 77.2684 133.637 78.4924 133.304C79.7164 132.971 80.7755 132.201 81.4689 131.141H81.4689Z"
                        />
                    <Path
                        fill="#A0616A"
                        d="M43.1856 218.919L49.4697 218.919L52.4589 194.722L43.1843 194.722L43.1856 218.919Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M41.5825 216.871L53.958 216.87H53.9585C54.9942 216.87 56.0197 217.074 56.9766 217.47C57.9335 217.865 58.8029 218.445 59.5352 219.176C60.2676 219.907 60.8485 220.775 61.2449 221.73C61.6412 222.686 61.8452 223.709 61.8452 224.743V224.999L41.5829 225L41.5825 216.871Z"
                        />
                    <Path
                        fill="#A0616A"
                        d="M83.166 218.919L89.4501 218.919L92.4398 194.722L83.1651 194.722L83.166 218.919Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M81.5633 216.871L93.9387 216.87H93.9392C94.9749 216.87 96.0005 217.074 96.9573 217.47C97.9142 217.865 98.7836 218.445 99.516 219.176C100.248 219.907 100.829 220.775 101.226 221.73C101.622 222.686 101.826 223.709 101.826 224.743V224.999L81.5636 225L81.5633 216.871Z"
                        />
                    <Path
                        fill="#F27120"
                        d="M79.5794 121.094L79.3064 121.045C77.0174 120.631 74.7007 120.212 72.6638 119.775L72.4622 119.732L72.4615 119.526C72.4266 110.251 72.3915 100.978 72.3401 91.6201C67.4751 81.8309 65.4298 70.8849 66.4324 60.003L66.4439 59.8881L66.5384 59.8206C67.4249 59.2059 68.4596 58.8382 69.5358 58.7551C70.612 58.672 71.691 58.8766 72.6617 59.3479C73.6113 59.8661 74.4231 60.6034 75.0293 61.4984C75.6356 62.3934 76.0187 63.4201 76.1467 64.4928C77.9991 74.5708 79.9167 85.0071 82.0555 95.2909L82.0634 95.3284L82.0597 95.3669C81.2673 103.754 80.448 112.427 79.6071 120.818L79.5794 121.094Z"
                        />
                    <Path
                        fill="#3980C2"
                        d="M75.4829 210.295L75.4329 210.059C72.4931 196.178 69.6553 184.873 66.9109 173.941C63.6221 160.84 60.5055 148.426 57.3591 132.36C57.7912 152.62 58.7948 167.175 59.9485 183.905C60.4694 191.46 61.008 199.272 61.5545 208.391L61.5713 208.67L61.2922 208.663C51.4572 208.411 41.3808 207.805 31.636 207.218L31.3782 207.203L31.3958 206.946C33.2407 179.798 33.8188 162.158 34.2409 149.277C35.1316 122.102 35.2685 117.925 45.4086 94.9261C45.7929 94.0536 48.086 91.4757 50.6072 91.8684L70.5577 94.9681L70.5926 95.1435C71.1557 97.9743 73.9493 106.564 77.8159 118.453C86.0817 143.868 98.5729 182.276 102.475 205.171L102.519 205.43L102.259 205.467C96.5907 206.271 92.5115 207.109 88.5666 207.918C84.8342 208.685 80.9749 209.477 75.7215 210.259L75.4829 210.295Z"
                        />
                    <Path
                        fill="#F27120"
                        d="M58.1433 102.152C52.8185 102.153 47.5554 100.308 43.7824 96.717C43.1927 96.3746 42.6941 95.8957 42.3285 95.3207C41.9629 94.7457 41.741 94.0915 41.6815 93.413C41.5847 92.7915 41.6254 92.1563 41.8006 91.5522C41.9758 90.948 42.2814 90.3894 42.6958 89.9156C38.9967 85.4458 35.1774 80.8261 31.5214 76.1219L31.4204 75.992L31.5374 75.7691C33.9294 71.2068 36.4028 66.4896 38.778 61.8284C38.9434 61.4221 39.2155 61.0679 39.5657 60.8032C39.9159 60.5384 40.3312 60.373 40.7678 60.3243C41.147 60.2527 41.5369 60.2591 41.9135 60.3432C42.2902 60.4272 42.6457 60.5871 42.9583 60.813L42.9631 60.6996C43.0623 58.34 43.1617 55.9804 43.2637 53.7438L43.2746 53.5049L43.5141 53.4994C48.0812 53.399 52.8037 53.2945 57.4425 53.0202L57.6191 53.0097L59.9198 58.1331C63.6567 57.7709 67.4167 58.5327 70.7164 60.3208L70.8683 60.4018L70.8507 60.5727C69.9252 69.3779 70.1265 78.2649 71.4496 87.0194C71.3778 91.0165 71.3006 95.102 70.4881 98.3586L70.4645 98.4535L70.3831 98.5085C66.7568 100.911 62.4954 102.18 58.1433 102.152Z"
                        />
                    <Path
                        fill="#F27120"
                        d="M38.5434 79.9246L38.2369 79.7842C34.6591 77.9923 31.0699 76.0044 27.599 74.0821L27.1195 73.9887C17.9806 72.1573 12.9465 71.1489 4.70166 66.3223L4.63834 66.2848L4.60431 66.2198C0.475939 58.347 -0.675601 51.4652 0.355428 40.8285L0.376072 40.6151L0.589815 40.5982C1.48357 40.5257 2.94032 40.4772 4.34902 40.4302C5.71955 40.3848 7.13676 40.3373 8.00561 40.2694L8.20721 40.2534L8.26953 40.4452C9.34987 43.7758 10.2676 46.8829 11.2394 50.1724C12.2381 53.5539 13.2704 57.0488 14.5278 60.932C19.1316 62.2527 31.4732 61.8579 35.3106 61.3362C36.4584 61.2519 37.6089 61.4569 38.6566 61.9325C39.7042 62.408 40.6153 63.1388 41.3061 64.0576L41.3773 64.1465L41.3589 64.259C40.5141 69.4059 39.544 74.5833 38.606 79.5903L38.5434 79.9246Z"
                        />
                    <Path
                        fill="#A0616A"
                        d="M61.039 45.0237C64.3741 38.9333 62.1319 31.2971 56.0311 27.9678C49.9302 24.6385 42.281 26.8768 38.9459 32.9672C35.6109 39.0576 37.8531 46.6937 43.9539 50.023C50.0547 53.3523 57.704 51.1141 61.039 45.0237Z"
                        />
                    <Path
                        fill="#2F2E41"
                        d="M35.6142 38.246H40.5935L42.7902 32.1057L43.2295 38.246H45.6094L46.8908 34.6642L47.1471 38.246H64.8309C64.8309 34.7176 63.4268 31.3337 60.9276 28.8387C58.4283 26.3437 55.0385 24.942 51.504 24.942H48.9411C45.4066 24.942 42.0169 26.3437 39.5176 28.8387C37.0183 31.3337 35.6142 34.7176 35.6142 38.246V38.246Z"
                        />
                </GroupAnimate>
            </G>
            <Defs>
                <ClipPath id="scane1">
                    <Rect width={345} height={225} fill="none" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}