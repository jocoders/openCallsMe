import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: HP('11.5%'),
    justifyContent: 'center',
    width: '100%'
  },
  icon: {
    position: 'absolute'
  },
  inputContainer: {
    width: '85%'
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: HP('6.8%'),
    flexDirection: 'row',
    height: HP('7.8%'),
    width: WP('95%')
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  textInput: {
    color: '#757575',
    fontFamily: 'Roboto',
    fontSize: HP('2.3%'),
    height: 48,
    maxWidth: '85%',
    left: WP('9%')
  }
})

const SearchBar = props => {
  const { container, icon, inputContainer, subContainer, shadowStyle, textInput } = styles
  const { onChangeText, onLeftIconPress, onRightIconPress, value } = props
  return (
    <View style={container}>
      <View style={[shadowStyle, subContainer]}>
        <TouchableOpacity onPress={onLeftIconPress}>
          <Ionicons color="#757575" style={(icon, { left: WP('5%') })} name="md-funnel" size={HP('3.5%')} />
        </TouchableOpacity>
        <View style={inputContainer}>
          <TextInput
            autoCapitalize="words"
            onChangeText={onChangeText}
            placeholder="Search.."
            style={textInput}
            value={value}
          />
        </View>
        <TouchableOpacity onPress={onRightIconPress}>
          <Ionicons color="#757575" style={(icon, { right: WP('0.3%') })} name="ios-mic" size={HP('4%')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar
