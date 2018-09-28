import { Platform } from "react-native";

const AVENIR_NEXT = {
  light: {
    fontFamily: "AvenirNext-UltraLight"
  },
  regular: {
    fontFamily: "AvenirNext-Regular"
  },
  medium: {
    fontFamily: "AvenirNext-Medium"
  },
  bold: {
    fontFamily: "AvenirNext-Bold"
  }
};

const ROBOTO = {
  light: {
    fontFamily: "sans-serif-light",
    fontWeight: "300"
  },
  regular: {
    fontFamily: "sans-serif",
    fontWeight: "normal"
  },
  medium: {
    fontFamily: "sans-serif-medium",
    fontWeight: "300"
  },
  bold: {
    fontFamily: "sans-serif-bold",
    fontWeight: "bold"
  }
};

const FONT_MAP = {
  light: { android: ROBOTO.light, ios: AVENIR_NEXT.light },
  regular: { android: ROBOTO.regular, ios: AVENIR_NEXT.regular },
  medium: { android: ROBOTO.medium, ios: AVENIR_NEXT.medium },
  bold: { android: ROBOTO.bold, ios: AVENIR_NEXT.bold }
};

var Font = {};

for (var weight in FONT_MAP) {
  if (FONT_MAP.hasOwnProperty(weight)) {
    Font[weight] = FONT_MAP[weight][Platform.OS];
  }
}

Object.freeze(Font);

export default Font;
