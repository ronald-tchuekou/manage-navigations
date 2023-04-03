import React from "react"
import {Image, StyleSheet} from "react-native";

const BackgroundImage = require('../../assets/background-image.png')

type ImageViewerProps = {
  imagePath?: string
}

export default function ImageViewer (props: ImageViewerProps) {
  const {imagePath} = props
  return (
    <Image
      source={!imagePath ? BackgroundImage : {uri: imagePath}}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});

