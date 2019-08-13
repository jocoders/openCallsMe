import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'
import Slider from 'react-native-slider'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  arrowImage: {
    height: HP('1.62%'),
    top: HP('0.55%'),
    width: WP('2.7%')
  },
  backdropContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  callDurationContainer: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: HP('8%'),
    width: '100%'
  },
  commentContainer: {
    backgroundColor: 'grey',
    height: HP('15%'),
    width: '100%'
  },
  container: {
    flex: 1
  },
  contactContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('11%'),
    justifyContent: 'space-between',
    top: HP('0.4%'),
    width: '100%'
  },
  contactSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: WP('60%')
  },
  defaultTag: {
    alignItems: 'center',
    borderColor: '#FEDA5A',
    borderWidth: WP('0.3%'),
    backgroundColor: 'rgba(254, 218, 90, 0.6)',
    borderRadius: HP('6.8%'),
    justifyContent: 'center'
  },
  defaultTagText: {
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.3%'),
    paddingBottom: HP('0.92%'),
    paddingLeft: WP('4%'),
    paddingRight: WP('4%'),
    paddingTop: HP('0.92%')
  },
  durationSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP('75%')
  },
  modalContainer: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',

    flexDirection: 'column',
    height: HP('95%'),
    top: HP('28%'),
    width: WP('100%')
  },
  phoneContainer: {
    bottom: HP('0.3%'),
    justifyContent: 'space-between',
    height: HP('6.1%'),
    left: WP('4%')
  },
  phoneStyle: {
    color: '#4F4F4F',
    fontFamily: 'Roboto',
    fontSize: HP('2.2%'),
    left: WP('1%')
  },
  phoneSubContainer: {
    flexDirection: 'row'
  },
  slider: {
    height: HP('4%'),
    //top: HP('9.9%'),
    width: WP('50%')
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
  tagsContainer: {
    minHeight: HP('24%'),
    width: '100%'
  },
  tagsCounter: {
    width: '100%'
  },
  tagsSubContainer: {
    flexDirection: 'row',
    left: WP('4.5%'),
    top: HP('5%')
  },
  tagsText: {
    color: '#4F4F4F',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.2%'),
    left: WP('4.5%'),
    top: HP('2.5%')
  },
  textDurationStyle: {
    color: '#585858',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.2%'),
    right: WP('1%'),
    width: WP('24%')
  },
  thumb: {
    borderRadius: HP('1.01%'),
    height: HP('2.03%'),
    width: WP('3.5%')
  },
  timeStyle: {
    color: 'rgba(79, 79, 79, 0.8)',
    fontFamily: 'Roboto',
    fontSize: HP('2.1%')
  },
  track: {
    height: HP('0.3%')
  },
  wrapContainer: {
    backgroundColor: 'rgba(254, 218, 90, 0.6)',
    borderRadius: 50
  }
})

const ModalContactCard = props => {
  const {
    arrowImage,
    backdropContainer,
    buttonContainer,
    callDurationContainer,
    commentContainer,
    container,
    contactContainer,
    contactSubContainer,
    defaultTag,
    defaultTagText,
    durationSubContainer,
    modalContainer,
    phoneContainer,
    phoneStyle,
    phoneSubContainer,
    slider,
    shadowStyle,
    tagsContainer,
    tagsCounter,
    tagsText,
    tagsSubContainer,
    textDurationStyle,
    timeStyle,
    thumb,
    track,
    wrapContainer
  } = styles
  const { callDuration, changeCallDuration, onModalPress, modalVisible } = props
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
          <View style={contactContainer}>
            <TouchableOpacity onPress={console.log('Left icon pressed')}>
              <Ionicons style={{ color: '#4F4F4F', left: WP('8.3%') }} name="md-more" size={HP('5%')} />
            </TouchableOpacity>

            <View style={contactSubContainer}>
              <Ionicons style={{ color: '#E91E63' }} name="md-contact" size={HP('8%')} />
              <View style={phoneContainer}>
                <View style={phoneSubContainer}>
                  <Image source={require('../img/Arrow.png')} style={arrowImage} />
                  <Text style={phoneStyle}>+7(905)-884-23-89</Text>
                </View>
                <Text style={timeStyle}>10:05 Feb 23 at 15:14</Text>
              </View>
            </View>
            <TouchableOpacity onPress={console.log('Right icon presssed')}>
              <Ionicons style={{ color: '#4F4F4F', right: WP('6%') }} name="ios-close" size={HP('8%')} />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#0D8B4E', height: HP('0.3%'), width: '100%' }} />

          <View style={callDurationContainer}>
            <TouchableOpacity onPress={console.log('Right icon presssed')}>
              <Ionicons style={{ color: '#4F4F4F', left: WP('3.5%') }} name="md-pause" size={HP('3.4%')} />
            </TouchableOpacity>

            <View style={durationSubContainer}>
              <Text style={textDurationStyle}>{callDuration}:00 / 10:05</Text>
              <Slider
                style={slider}
                minimumValue={0}
                maximumValue={60}
                minimumTrackTintColor="#FEDA5A"
                maximumTrackTintColor="rgba(0, 0, 0, 0.26)"
                onValueChange={changeCallDuration}
                step={1}
                thumbTintColor="#FEDA5A"
                thumbStyle={thumb}
                trackStyle={track}
                value={callDuration}
              />
            </View>
            <TouchableOpacity onPress={console.log('Right icon presssed')}>
              <Ionicons style={{ color: '#4F4F4F', right: WP('3.5%') }} name="md-folder" size={HP('4.2%')} />
            </TouchableOpacity>
          </View>

          <View style={tagsContainer}>
            <View style={tagsCounter}>
              <Text style={tagsText}>Tags (2 / 5)</Text>
            </View>

            <View style={tagsSubContainer}>
              <View style={defaultTag}>
                <Text style={defaultTagText}>Important</Text>
              </View>
              <View style={[defaultTag, { left: WP('3%') }]}>
                <Text style={defaultTagText}>Sligthly important</Text>
              </View>
            </View>
          </View>

          <View style={commentContainer}>
            <Text>Comment container</Text>
          </View>
          <View style={buttonContainer}>
            <Text>Button container</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalContactCard
