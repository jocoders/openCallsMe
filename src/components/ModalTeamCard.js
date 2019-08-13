import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  backdropContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  button: {},
  buttonText: {
    alignSelf: 'flex-end',
    bottom: HP('3%'),
    color: '#FDC02E',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.2%'),
    right: WP('4.8%')
  },
  container: {
    flex: 1
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: HP('2.5%'),
    lineHeight: HP('4.2%'),
    top: HP('1%')
  },
  header: {
    fontFamily: 'Roboto-medium',
    fontSize: HP('3.2%')
  },
  modalContainer: {
    alignSelf: 'center',
    borderRadius: WP('1.5%'),
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    height: HP('52%'),
    width: WP('89%')
  },
  modalImage: {
    borderRadius: WP('1.5%'),
    height: HP('25%'),
    width: '100%'
  },
  shadowStyle: {
    elevation: 24,
    shadowColor: 'rgba(0, 0, 0, 0.7)',

    shadowOffset: {
      width: 0,
      height: 24
    },
    shadowOpacity: 0.58,
    shadowRadius: 16
  },
  subContainer: {
    flex: 1,
    left: WP('5.8%'),
    maxWidth: WP('78%'),
    //right: WP('5%'),
    top: HP('2.4%')
  }
})

const ModalTeamCard = props => {
  const {
    backdropContainer,
    button,
    buttonText,
    container,
    description,
    header,
    modalContainer,
    modalImage,
    shadowStyle,
    subContainer
  } = styles
  const { onModalPress, modalVisible } = props
  return (
    <View style={container}>
      <Modal
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionOutTiming={1000}
        isVisible={modalVisible}
        customBackdrop={<View style={backdropContainer} />}
      >
        <View style={[modalContainer, shadowStyle]}>
          <Image style={modalImage} source={require('../img/team1.png')} />
          <View style={subContainer}>
            <Text style={header}>Work with your team!</Text>
            <Text style={description}>
              Create or join existing team. Share your calls, view and analyze, your collegues productivity.
            </Text>
          </View>
          {Platform.OS === 'ios' ? (
            <TouchableOpacity onPress={onModalPress} style={button}>
              <Text style={buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          ) : (
            <TouchableWithoutFeedback onPress={onModalPress} style={button}>
              <Text style={buttonText}>CONTINUE</Text>
            </TouchableWithoutFeedback>
          )}
        </View>
      </Modal>
    </View>
  )
}

export default ModalTeamCard
