import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import { ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    backgroundColor: '#09783D',
    flex: 1,
    height: 122,
    justifyContent: 'center',
    width: '100%'
  },
  container: {
    flex: 1
  },
  googleContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: WP('1%'),
    flexDirection: 'row',
    height: HP('7.4%'),
    ...ifIphoneX(
      {
        height: HP('6.4%')
      },
      {
        height: HP('7.4%')
      }
    ),
    ...ifIphoneX(
      {
        width: WP('70%')
      },
      {
        width: WP('66%')
      }
    )
  },
  icon: {
    ...ifIphoneX(
      {
        width: WP('8%')
      },
      {
        width: WP('6.93%')
      }
    ),
    ...ifIphoneX(
      {
        height: HP('3.5%')
      },
      {
        height: HP('4.2%')
      }
    ),
    left: WP('3%')
  },
  image: {
    height: HP('4.5%'),
    ...ifIphoneX(
      {
        left: WP('13%')
      },
      {
        left: WP('20%')
      }
    ),
    ...ifIphoneX(
      {
        width: WP('74%')
      },
      {
        width: WP('60%')
      }
    ),
    top: HP('34%')
  },
  line: {
    backgroundColor: '#DCDCDC',
    borderRightWidth: WP('0.2%'),
    height: HP('5.4%'),
    left: WP('4%'),
    opacity: 0.2,
    marginLeft: WP('2%')
  },
  shadowstyle: {
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5
  },

  subContainer: {
    flex: 3.65,
    backgroundColor: '#0D8B4E',
    width: '100%'
  },
  text: {
    color: '#808080',
    fontFamily: 'Exo2-Medium',
    ...ifIphoneX(
      {
        fontSize: HP('2.4%')
      },
      {
        fontSize: HP('2.6%')
      }
    ),
    ...ifIphoneX(
      {
        left: WP('3%')
      },
      {
        left: WP('4%')
      }
    )
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    left: WP('6%')
  }
})

const AuthScreen = ({ navigation }, props) => {
  const {
    bottomContainer,
    container,
    googleContainer,
    icon,
    image,
    line,
    shadowStyle,
    subContainer,
    text,
    textContainer
  } = styles
  const { onPress } = props
  return (
    <View style={container}>
      <ProjectStatusBar backgroundColor="#005C24" barStyle="light-content" />
      <View style={subContainer}>
        <Image source={require('../img/OpenCalls.me.png')} style={image} />
      </View>
      <View style={[bottomContainer, shadowStyle]}>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity onPress={() => navigation.navigate('App')}>
            <View style={googleContainer}>
              <Image source={require('../img/new-google-favicon-512.jpg')} style={icon} />
              <View style={line} />
              <View style={textContainer}>
                <Text style={text}>Sign in with Google</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('App')}>
            <View style={googleContainer}>
              <Image source={require('../img/new-google-favicon-512.jpg')} style={icon} />
              <View style={line} />
              <View style={textContainer}>
                <Text style={text}>Sign in with Google</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  )
}

export { AuthScreen }
