import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  statusBar: {
    height: HP('3%')
  }
})

const ProjectStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default ProjectStatusBar
