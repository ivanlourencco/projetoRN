import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({route}) => {
    console.log(console.log(route))
  return (
    // FlatList para renderizar as opções
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({})