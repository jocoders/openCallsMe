import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
    //top: HP('8.9%')
  },
  number: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: WP('4.5%'),
    height: HP('5%'),
    width: WP('9%')
  },
  numberAndroid: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: HP('2.5%'),
    height: HP('5%'),
    width: WP('8.55%')
  },
  numberText: {
    //alignSelf: 'center',
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%'),
    fontWeight: 'bold'
  },
  subContainer: {
    flexDirection: 'row',
    left: WP('8.9%'),
    marginTop: HP('5.2%')
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: HP('2.6%'),
    left: WP('3.33')
  }
})
const BenefitsCard = props => {
  const { container, number, numberAndroid, numberText, subContainer, text } = styles
  const { containerStyle } = props
  return (
    <View style={[containerStyle, { top: containerStyle }]}>
      <View style={subContainer}>
        <View style={Platform.OS === 'ios' ? number : numberAndroid}>
          <Text style={numberText}>1</Text>
        </View>
        <Text style={text}>Save your call history</Text>
      </View>
      <View style={subContainer}>
        <View style={Platform.OS === 'ios' ? number : numberAndroid}>
          <Text style={numberText}>2</Text>
        </View>
        <Text style={text}>Analyze statistics</Text>
      </View>
      <View style={subContainer}>
        <View style={Platform.OS === 'ios' ? number : numberAndroid}>
          <Text style={numberText}>3</Text>
        </View>
        <Text style={text}>Work with Google Docs in real time</Text>
      </View>
    </View>
  )
}

export default BenefitsCard
