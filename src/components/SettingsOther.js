import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Switch } from 'react-native-switch'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  bottomSubContainer: {
    height: HP('8%'),
    top: HP('16%'),
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    height: HP('40%'),
    width: '100%'
  },
  blockContainer: {
    alignItems: 'center',
    flex: 1.48
  },
  generalHeader: {
    color: '#FFC107',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.5%'),
    top: HP('3.6%')
  },
  header: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%')
  },
  settingsContainer: {
    flex: 6.2
  },
  switchStyle: {
    position: 'absolute',
    right: WP('5%')
    //left: WP('13.5%')
  },
  subHeader: {
    color: 'rgba(0, 0, 0, 0.543846)',
    fontFamily: 'Roboto',
    fontSize: HP('2.2%'),
    lineHeight: HP('3%'),
    top: HP('0.25')
  },
  topSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('6%'),
    top: HP('10%'),
    width: '100%'
  },
  textContainer: {
    width: WP('50%')
  }
})
const SettingsOther = props => {
  const {
    blockContainer,
    bottomSubContainer,
    container,
    generalHeader,
    header,
    topSubContainer,
    settingsContainer,
    subHeader,
    switchStyle,
    textContainer
  } = styles
  const { sendDebug, switchSendDebug } = props

  return (
    <View style={container}>
      <View style={blockContainer} />

      <View style={settingsContainer}>
        <Text style={generalHeader}>Other</Text>

        <View style={topSubContainer}>
          <View style={textContainer}>
            <Text style={header}>Send Debug</Text>
            <Text style={subHeader}>Send debug information</Text>
          </View>
          <View style={switchStyle}>
            <Switch
              circleBorderWidth={0}
              circleSize={HP('3.4%')}
              disabled={false}
              barHeight={HP('2.2%')}
              backgroundActive={'#FCDD80'}
              backgroundInactive={'rgba(34, 31, 31, 0.26)'}
              circleActiveColor={'#FFC107'}
              circleInActiveColor={'#E5E5E5'}
              changeValueImmediately={true}
              onValueChange={switchSendDebug}
              style={switchStyle}
              value={sendDebug}
            />
          </View>
        </View>

        <View style={bottomSubContainer}>
          <View style={[textContainer, { width: WP('70%') }]}>
            <Text style={header}>Google Drive Report</Text>
            <Text style={subHeader}>Open google drive reports with your logged calls</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SettingsOther
