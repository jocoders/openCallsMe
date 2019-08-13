import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D8B4E',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...ifIphoneX(
      {
        height: HP('10.5%')
      },
      {
        height: HP('9%')
      }
    ),
    position: 'absolute',
    width: '100%'
  },
  buttonStyle: {
    right: WP('6.4%'),
    //position: 'absolute',
    top: HP('2.9%')
  },
  textStyle: {
    color: '#FFC107',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.8%')
  }
})

const BottomContainer = props => {
  const { buttonStyle, container, textStyle } = styles
  const { buttonTitle, buttonRight, onPress } = props
  console.log('props', props)
  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'ios' ? (
        <View style={container}>
          <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={[textStyle, { right: buttonRight }]}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={container}>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={[textStyle, { right: buttonRight, marginRight: WP('6.4%'), marginTop: HP('2.9%') }]}>
              {buttonTitle}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  )
}

export default BottomContainer
