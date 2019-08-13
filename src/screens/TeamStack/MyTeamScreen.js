import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeModules } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15
  }
})
const MyTeamScreen = () => {
  console.log('NativeModules.Settings', NativeModules.Settings.getConstants)
  const { container, text } = styles
  const onPressCheck = () => {
    NativeModules.Settings.getGT(value => console.log(value))
  }
  const onPressSwitch = () => {
    NativeModules.Settings.switchGenerlTag()
  }
  return (
    <View style={container}>
      <Text style={text}>This is MyTeamScreen</Text>
      <Button title="check" onPress={onPressCheck} />
      <Button title="switch" onPres={onPressSwitch} />
    </View>
  )
}

export default MyTeamScreen
