import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ModalTeamCard, ProjectStatusBar } from '../../components'
import { WP, HP } from '../../constants'
import { MY_TEAM_SCREEN } from '../routes'

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FFDB4D',
    borderRadius: WP('0.5%'),
    flexDirection: 'row',
    height: HP('5.6%'),
    top: HP('26.2%'),
    width: WP('51%')
  },
  buttonTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.6%'),
    left: WP('9.3%')
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: HP('29%'),
    top: HP('22%'),
    width: WP('52%')
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: HP('3.2%'),
    lineHeight: HP('4.2%'),
    textAlign: 'center',
    top: HP('23.7%'),
    maxWidth: WP('50%')
  }
})

const TeamScreen = ({ navigation }) => {
  const { buttonContainer, buttonTitle, container, image, text } = styles
  const [modalVisible, setModalVisible] = useState(true)
  const modalVisibleHandler = () => {
    setModalVisible(false)
  }
  const onPress = () => {
    navigation.navigate(MY_TEAM_SCREEN)
  }
  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <Image style={image} source={require('../../img/create-team.png')} />
      <Text style={text}>You haven't created any business yet.</Text>

      {Platform.OS === 'ios' ? (
        <TouchableOpacity onPress={onPress}>
          <View style={buttonContainer}>
            <Ionicons style={{ color: 'black', left: WP('3%') }} name="ios-add" size={HP('5%')} />
            <Text style={buttonTitle}>CREATE TEAM</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={buttonContainer}>
            <Ionicons style={{ color: 'black', left: WP('3%') }} name="ios-add" size={HP('5%')} />
            <Text style={buttonTitle}>CREATE TEAM</Text>
          </View>
        </TouchableWithoutFeedback>
      )}

      <ModalTeamCard onModalPress={modalVisibleHandler} modalVisible={modalVisible} />
    </View>
  )
}

export default TeamScreen
