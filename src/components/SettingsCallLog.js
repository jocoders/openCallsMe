import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-switch'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    flex: 1,
    flexDirection: 'row',
    height: HP('11.5%'),
    width: '100%'
  },
  header: {
    bottom: HP('0.15%'),
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%')
  },
  subHeader: {
    color: 'rgba(0, 0, 0, 0.543846)',
    fontFamily: 'Roboto',
    fontSize: HP('2.1%'),
    top: HP('0.17%')
  },
  subContainer: {
    flexDirection: 'column',
    left: WP('4.4%')
  },
  switchStyle: {
    //left: WP('51.5%')
    position: 'absolute',
    right: WP('5%')
  }
})

const SettingsCallLog = props => {
  const { container, header, subContainer, subHeader, switchStyle } = styles
  const { callLog, switchCallLog } = props

  return (
    <View style={container}>
      <View style={subContainer}>
        <Text style={header}>Call logging</Text>
        <Text style={subHeader}>Calls will be locked</Text>
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
          onValueChange={switchCallLog}
          value={callLog}
        />
      </View>
    </View>
  )
}

export default SettingsCallLog
