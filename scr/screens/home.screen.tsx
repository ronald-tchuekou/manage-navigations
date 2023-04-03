import {StatusBar} from "expo-status-bar";
import React from "react"
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";

type ItemType = {
  name: string
  title: string
  icon: string
}

const HomeScreen = (props: any) => {
  const {navigation} = props

  const content: ItemType[] = [
    {
      name: 'Stickers',
      title: 'Stickers splash',
      icon: ''
    },
    {
      name: 'Inputs',
      title: 'Inputs styles',
      icon: ''
    },
    {
      name: 'Buttons',
      title: 'Buttons styles',
      icon: ''
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={content}
        style={styles.container}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <ContentItem
            onPress={() => navigation.navigate(item.name)}
            item={item}/>
        )}/>
      <StatusBar style="dark"/>
    </View>
  )
}

type ContentItemProps = {
  item: ItemType
  onPress?: () => void
}

function ContentItem (props: ContentItemProps) {
  const {item, onPress} = props

  return (
    <Pressable onPress={onPress} style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  itemContainer: {
    marginVertical: 7,
    marginHorizontal: 10,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  itemTitle: {
    fontSize: 17,
    color: '#282828',
    fontWeight: '400'
  },
});

export default HomeScreen