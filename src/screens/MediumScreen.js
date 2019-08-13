import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import { BenefitsCard, BottomContainer, ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    ...ifIphoneX(
      {
        fontSize: HP('3.2%')
      },
      {
        fontSize: HP('3.7%')
      }
    ),
    ...ifIphoneX(
      {
        marginTop: HP('8%')
      },
      {
        top: HP('5%')
      }
    )
  },
  headerContainer: {
    backgroundColor: '#F9F7F9',
    ...ifIphoneX(
      {
        height: HP('17%')
      },
      {
        height: HP('14.2%')
      }
    )
  },
  image: {
    alignSelf: 'center',
    ...ifIphoneX(
      {
        height: HP('28%')
      },
      {
        height: HP('34%')
      }
    ),
    width: '100%'
  },
  imageAndroid: {
    alignSelf: 'center',
    height: HP('36%'),
    //top: HP('8.6%'),
    width: '100%'
  }
})

const MediumScreen = ({ navigation }) => {
  const { imageAndroid, container, header, headerContainer, image } = styles
  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <View style={headerContainer}>
        <Text style={header}>Work with your team</Text>
      </View>
      <Image style={Platform.OS === 'ios' ? image : imageAndroid} source={require('../img/team.png')} />
      <BenefitsCard containerStyle={isIphoneX() ? HP('2.5%') : HP('0.8%')} />
      <BottomContainer onPress={() => navigation.navigate('Auth')} buttonTitle="DONE" />
    </View>
  )
}

export { MediumScreen }
