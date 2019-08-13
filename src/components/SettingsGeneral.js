import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Slider from 'react-native-slider'
import { Switch } from 'react-native-switch'

import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  bottomSubContainer: {
    height: HP('8%'),
    top: HP('14%'),
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    height: HP('105%'),
    width: '100%'
  },
  durationHeader: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%'),
    top: HP('8.8%')
  },
  generalHeader: {
    color: '#FFC107',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.5%'),
    top: HP('3.4%')
  },
  header: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: HP('2.5%')
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1.48
  },
  image: {
    borderRadius: HP('1.9%'),
    height: HP('3.8%'),
    top: HP('13.5%'),
    width: WP('6.76%')
  },
  infoContainer: {
    flex: 6.2
  },
  mediumSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('8%'),
    top: HP('9.5%'),
    width: '100%'
  },
  notesHeader: {
    color: '#FFC107',
    fontFamily: 'Roboto-Medium',
    fontSize: HP('2.5%'),
    top: HP('16%')
  },
  slider: {
    height: HP('4%'),
    top: HP('9.9%'),
    width: WP('75%')
  },
  sliderContainer: {
    //flex: 1
  },
  settingsContainer: {
    top: HP('10%')
  },
  subHeader: {
    color: 'rgba(0, 0, 0, 0.543846)',
    fontFamily: 'Roboto',
    fontSize: HP('2.2%'),
    lineHeight: HP('3%'),
    top: HP('0.25')
  },
  switchStyle: {
    position: 'absolute',
    right: WP('5%')
    //left: WP('13.5%')
  },

  textContainer: {
    width: WP('50%')
  },
  thumb: {
    borderRadius: HP('1.01%'),
    height: HP('2.03%'),
    width: WP('3.5%')
  },
  topSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('6%'),
    top: HP('4.5%'),
    width: '100%'
  },
  track: {
    height: HP('0.3%')
  }
})

const SettingsGeneral = props => {
  const {
    bottomSubContainer,
    container,
    durationHeader,
    generalHeader,
    header,
    iconContainer,
    image,
    infoContainer,
    mediumSubContainer,
    notesHeader,
    slider,
    sliderContainer,
    settingsContainer,
    subHeader,
    textContainer,
    switchStyle,
    thumb,
    topSubContainer,
    track
  } = styles
  const {
    callDuration,
    changeCallDuration,
    generalRememberTags,
    generalTagLog,
    notesRememberTags,
    notesTagLog,
    switchGeneralRememberTags,
    switchGeneralTagLog,
    switchCallDuration,
    switchNotesRememberTags,
    switchNotesTagLog
  } = props
  return (
    <View style={container}>
      <View style={iconContainer}>
        <Image style={image} source={require('../img/Vector.png')} />
      </View>
      <View style={infoContainer}>
        <View style={sliderContainer}>
          <Text style={generalHeader}>General</Text>
          <Text style={durationHeader}>Minimal call duration: {callDuration} min</Text>
          <Slider
            style={slider}
            minimumValue={0}
            maximumValue={60}
            minimumTrackTintColor="#FFC107"
            maximumTrackTintColor="rgba(0, 0, 0, 0.26)"
            onValueChange={changeCallDuration}
            step={1}
            thumbTintColor="#FFC107"
            thumbStyle={thumb}
            trackStyle={track}
            value={callDuration}
          />
        </View>
        <View style={settingsContainer}>
          <View style={topSubContainer}>
            <View style={textContainer}>
              <Text style={header}>Tag only mode</Text>
              <Text style={subHeader}>Logged only tagged calls</Text>
            </View>
            <View style={switchStyle}>
              <Switch
                circleBorderWidth={0}
                circleSize={HP('3.4%')}
                disabled={false}
                barHeight={HP('2.2%')}
                backgroundActive={'#FCDD80'}
                backgroundInactive={'rgba(34, 31, 31, 0.26)'}
                circleActiveColor={'#FFC107'}
                circleInActiveColor={'#E5E5E5'}
                changeValueImmediately={true}
                onValueChange={switchGeneralTagLog}
                style={switchStyle}
                value={generalTagLog}
              />
            </View>
          </View>

          <View style={mediumSubContainer}>
            <View style={textContainer}>
              <Text style={header}>Remember tags</Text>
              <Text style={subHeader}>Remember tags you use for contacts</Text>
            </View>
            <View style={switchStyle}>
              <Switch
                circleBorderWidth={0}
                circleSize={HP('3.4%')}
                disabled={false}
                barHeight={HP('2.2%')}
                backgroundActive={'#FCDD80'}
                backgroundInactive={'rgba(34, 31, 31, 0.26)'}
                circleActiveColor={'#FFC107'}
                circleInActiveColor={'#E5E5E5'}
                changeValueImmediately={true}
                onValueChange={switchGeneralRememberTags}
                value={generalRememberTags}
              />
            </View>
          </View>

          <View style={bottomSubContainer}>
            <View style={[textContainer, { width: WP('90%') }]}>
              <Text style={header}>Tag collection</Text>
              <Text style={subHeader}>Create your personal tag collection</Text>
            </View>
          </View>

          <Text style={notesHeader}>Notifications</Text>
          <View style={[topSubContainer, { top: HP('21.5%') }]}>
            <View style={textContainer}>
              <Text style={header}>Tag only mode</Text>
              <Text style={subHeader}>Logged only tagged calls</Text>
            </View>
            <View style={switchStyle}>
              <Switch
                circleBorderWidth={0}
                circleSize={HP('3.4%')}
                disabled={false}
                barHeight={HP('2.2%')}
                backgroundActive={'#FCDD80'}
                backgroundInactive={'rgba(34, 31, 31, 0.26)'}
                circleActiveColor={'#FFC107'}
                circleInActiveColor={'#E5E5E5'}
                changeValueImmediately={true}
                onValueChange={switchNotesTagLog}
                style={switchStyle}
                value={notesTagLog}
              />
            </View>
          </View>

          <View style={[mediumSubContainer, { top: HP('27.7%') }]}>
            <View style={textContainer}>
              <Text style={header}>Remember tags</Text>
              <Text style={subHeader}>Remember tags you use for contacts</Text>
            </View>
            <View style={switchStyle}>
              <Switch
                circleBorderWidth={0}
                circleSize={HP('3.4%')}
                disabled={false}
                barHeight={HP('2.2%')}
                backgroundActive={'#FCDD80'}
                backgroundInactive={'rgba(34, 31, 31, 0.26)'}
                circleActiveColor={'#FFC107'}
                circleInActiveColor={'#E5E5E5'}
                changeValueImmediately={true}
                onValueChange={switchNotesRememberTags}
                value={notesRememberTags}
              />
            </View>
          </View>
          <View style={bottomSubContainer}>
            <View style={[textContainer, { top: HP('20%'), width: WP('90%') }]}>
              <Text style={header}>Tag collection</Text>
              <Text style={subHeader}>Create your personal tag collection</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SettingsGeneral
