import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { BenefitsCard, BottomContainer, ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: HP('3.7%'),
    top: HP('6.4%')
  },
  image: {
    alignSelf: 'center',
    height: HP('36.05'),
    top: HP('11.6%'),
    width: WP('86.21%')
  }
})

const InitialScreen = ({ navigation }) => {
  const { container, header, image, imageAndroid } = styles
  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <Text style={header}>View your calls in Google Drive</Text>
      <Image style={image} source={require('../img/google-drive.png')} />
      <BenefitsCard containerStyle={HP('8.9%')} />
      <BottomContainer onPress={() => navigation.navigate('Medium')} buttonTitle="NEXT" />
    </View>
  )
}

export { InitialScreen }
