import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  bottomSubContainer: {
    top: HP('8.4%')
  },
  container: {
    height: HP('34%'),
    width: '100%'
  },
  header: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%')
  },
  headerContainer: {
    flex: 1,
    top: HP('1.5%')
  },
  icon: {
    color: '#757575',
    top: HP('7.5%')
  },
  image: {
    borderRadius: HP('3.3%'),
    height: HP('6.6%'),
    top: HP('1.38%'),
    width: WP('11.73%')
  },
  imageContainer: {
    alignItems: 'center',
    flex: 0.96,
    flexDirection: 'column'
  },
  infoContainer: {
    flex: 4,
    flexDirection: 'column'
  },
  mainHeader: {
    color: '#FFC107',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.5%'),
    left: WP('19.8%'),
    top: HP('2.2%')
  },
  subContainer: {
    flex: 2,
    //height: HP('20%'),
    flexDirection: 'row',
    width: '100%'
  },
  subHeader: {
    color: 'rgba(0, 0, 0, 0.543846)',
    fontFamily: 'Roboto',
    fontSize: HP('2.1%'),
    top: HP('0.25')
  },
  topSubContainer: {
    top: HP('1.6%')
  }
})

const SettingsAccount = props => {
  const {
    bottomSubContainer,
    container,
    header,
    headerContainer,
    icon,
    infoContainer,
    image,
    imageContainer,
    mainHeader,
    subContainer,
    subHeader,
    topSubContainer
  } = styles
  const { avatar, email, phoneID } = props
  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={mainHeader}>Account</Text>
      </View>
      <View style={subContainer}>
        <View style={imageContainer}>
          <Image style={image} source={avatar} />
          <Ionicons style={icon} name="logo-apple" size={HP('5%')} />
        </View>
        <View style={infoContainer}>
          <View style={topSubContainer}>
            <Text style={header}>Disconnect account</Text>
            <Text style={subHeader}>{email}</Text>
          </View>
          <View style={bottomSubContainer}>
            <Text style={header}>Telephone id</Text>
            <Text style={subHeader}>{phoneID}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SettingsAccount
