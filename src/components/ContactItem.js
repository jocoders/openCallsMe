import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  arrowImage: {
    height: HP('1.8%'),
    top: HP('2.4%'),
    width: WP('3%')
  },
  contactDate: {
    color: '#828282',
    fontFamily: 'Roboto',
    fontSize: HP('2%'),
    top: HP('1.8%')
  },
  contactName: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: 'Roboto',
    fontSize: HP('2.6%'),
    left: WP('2.5%'),
    maxWidth: WP('40%'),
    top: HP('1.8%')
  },
  contactPhone: {
    fontFamily: 'Roboto',
    fontSize: HP('2.3%'),
    color: '#828282',
    left: WP('0.8%'),
    top: HP('3%')
  },
  container: {
    flexDirection: 'row',
    minHeight: HP('11%'),
    paddingBottom: HP('4%')
  },
  contactContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  dateContainer: {
    flex: 1.6
  },
  image: {
    alignSelf: 'center',
    borderRadius: HP('3.4%'),
    height: HP('6.8%'),
    width: WP('12.1%'),
    top: HP('2.1%')
  },
  imageContainer: {
    flex: 1
  },
  nameContainer: {
    flexDirection: 'row',
    left: WP('1.9%')
  }
})
const ContactItem = props => {
  const {
    arrowImage,
    contactName,
    contactPhone,
    contactDate,
    container,
    contactContainer,
    dateContainer,
    image,
    imageContainer,
    nameContainer
  } = styles
  const { avatar, date, name, onPress, phone } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={imageContainer}>
          <Image source={avatar} style={image} />
        </View>

        <View style={contactContainer}>
          <View style={nameContainer}>
            <Image source={require('../img/Arrow.png')} style={arrowImage} />
            <Text style={contactName}>{name}</Text>
          </View>
          <Text style={contactPhone}>{phone}</Text>
        </View>
        <View style={dateContainer}>
          <Text style={contactDate}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContactItem
