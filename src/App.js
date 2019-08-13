import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AppNavigator from './AppNavigator'
import { WP, HP } from './constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = () => {
  return <AppNavigator />
}

export default App
