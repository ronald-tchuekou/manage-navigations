import React from 'react';
import {FlatList, Image, Platform, Pressable, StyleSheet} from 'react-native';

type EmojiListProps = {
  onSelect: (item: any) => void
  onCloseModal: () => void
}

export default function EmojiList (props: EmojiListProps) {

  const {onSelect, onCloseModal} = props

  const [emoji] = React.useState<any>([
    require('../assets/emoji/emoji_1.png'),
    require('../assets/emoji/emoji_2.png'),
    require('../assets/emoji/emoji_3.gif'),
    require('../assets/emoji/emoji_4.png'),
    require('../assets/emoji/emoji_5.png'),
    require('../assets/emoji/emoji_6.png'),
    require('../assets/emoji/emoji_7.png'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, index}) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image
              source={item}
              key={index}
              style={styles.image}/>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
