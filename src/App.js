import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20
  }
})
const App = () => {
  const { container, text } = styles
  return (
    <View style={container}>
      <Text style={text}>This is my App screen.</Text>
    </View>
  )
}

export default App
