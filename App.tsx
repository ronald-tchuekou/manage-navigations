import * as ImagePicker from "expo-image-picker"
import {StatusBar} from 'expo-status-bar';
import React from "react"
import {StyleSheet, View} from 'react-native';
import Button from "./scr/button";
import CircleButton from "./scr/circleButton";
import EmojiList from "./scr/emojiList";
import EmojiPicker from "./scr/emojiPicker";
import EmojiSticker from "./scr/emojiSticker";
import IconButton from "./scr/iconButton";
import ImageViewer from "./scr/imageViewer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

export default function App () {
  const imageRef = React.useRef<any>(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [pickedEmoji, setPickedEmoji] = React.useState<any>(null);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false)
  const [showAppOptions, setShowAppOptions] = React.useState<boolean>(false)
  const [image, setImage] = React.useState<ImagePicker.ImagePickerAsset | null>(null)

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0])
      setShowAppOptions(true)
    } else
      alert('You did not select any image.')
  }

  const onReset = () => {

  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer imagePath={image?.uri}/>
        {pickedEmoji !== null ?
          <EmojiSticker
            imageSize={40}
            stickerSource={pickedEmoji}/> :
          null}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton
              icon="refresh"
              label="Reset"
              onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            onPress={pickImageAsync}
            theme="primary"
            label="Choose a photo"/>
          <Button
            onPress={() => setShowAppOptions(true)}
            label="Use this photo"/>
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}>
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="light"/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
