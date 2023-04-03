import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from "react"
import {Pressable, StyleSheet, Text} from 'react-native';

type IconButtonProps = {
  icon: 'refresh' | 'save-alt'
  label: string
  onPress?: () => void
}

export default function IconButton (props: IconButtonProps) {
  const {icon, label, onPress} = props

  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff"/>
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
