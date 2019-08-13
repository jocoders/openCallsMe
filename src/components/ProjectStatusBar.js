import React from 'react'
import { Platform, StyleSheet, StatusBar, View } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  statusBar: {
    ...ifIphoneX(
      {
        height: HP('5.5%')
      },
      {
        height: HP('3%')
      }
    )
  }
})

const ProjectStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default ProjectStatusBar
