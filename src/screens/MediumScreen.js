import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { BenefitsCard, BottomContainer, ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: HP('3.7%'),
    top: HP('5%')
  },
  headerContainer: {
    backgroundColor: '#F9F7F9',
    height: HP('14.2%')
  },
  image: {
    alignSelf: 'center',
    height: HP('34%'),
    //top: HP('8.6%'),
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
      <Image style={Platform.OS === 'OS' ? image : imageAndroid} source={require('../img/team.png')} />
      <BenefitsCard containerStyle={HP('0.8%')} />
      <BottomContainer onPress={() => navigation.navigate('Auth')} buttonTitle="DONE" />
    </View>
  )
}

export { MediumScreen }
