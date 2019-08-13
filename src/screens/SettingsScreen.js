import React, { useState } from 'react'
import { NativeModules } from 'react-native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  ProjectStatusBar,
  SettingsAccount,
  SettingsCallLog,
  SettingsGeneral,
  SettingsOther,
  SettingsLine
} from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const SettingsScreen = () => {
  console.log('NativeModules.Settings.generalTagLog', NativeModules.Settings.generalTagLog)
  const { container } = styles
  const [debugValue, setDebugValue] = useState(false)
  const [gLogValue, setGLogValue] = useState(false)
  const [gRememberValue, setGRememberValue] = useState(false)
  const [logValue, setLogValue] = useState(false)
  const [notesLogValue, setNotesLogValue] = useState(false)
  const [notesRememberValue, setNotesRememberValue] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const debugValueHandler = () => {
    setDebugValue === true ? setDebugValue(false) : setDebugValue(true)
  }
  const gLogValueHandler = () => {
    gLogValue === true ? setGLogValue(false) : setGLogValue(true)
  }
  const gRememberValueHandler = () => {
    gRememberValue === true ? setGRememberValue(false) : setGRememberValue(true)
  }
  const notesValueHandler = () => {
    notesLogValue === true ? setNotesLogValue(false) : setNotesLogValue(true)
  }
  const notesRememberHandler = () => {
    notesRememberValue === true ? setNotesRememberValue(false) : setNotesRememberValue(true)
  }
  const sliderValueHandler = value => {
    setSliderValue(value)
  }
  const getGeneralLogFromSwift = () => {
    return NativeModules.Settings.getGeneralTagLog()
  }
  const switchLogHandler = () => {
    NativeModules.Settings.switchGeneralTagLog()
  }

  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <ScrollView>
        <SettingsCallLog callLog={logValue} switchCallLog={switchLogHandler} />
        <SettingsAccount avatar={require('../img/avatar/4.jpg')} email="kuzya228@gmail.com" phoneID="Kuza_iphone" />
        <SettingsLine />
        <SettingsGeneral
          callDuration={sliderValue}
          changeCallDuration={sliderValueHandler}
          generalRememberTags={gRememberValue}
          generalTagLog={NativeModules.Settings.generalTagLog}
          notesRememberTags={notesRememberValue}
          notesTagLog={notesLogValue}
          switchGeneralTagLog={switchLogHandler}
          switchGeneralRememberTags={gRememberValueHandler}
          switchNotesTagLog={notesValueHandler}
          switchNotesRememberTags={notesRememberHandler}
        />
        <SettingsLine />
        <SettingsOther sendDebug={debugValue} switchSendDebug={debugValueHandler} />
      </ScrollView>
    </View>
  )
}

export { SettingsScreen }
