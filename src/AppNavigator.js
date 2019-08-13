import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

import { AuthScreen, InitialScreen, MediumScreen, MyCallsScreen, SettingsScreen } from './screens'
import TeamStack from './screens/TeamStack'
import { WP, HP } from './constants'

const AppStack = createBottomTabNavigator(
  {
    MY_CALLS_SCREEN: {
      screen: MyCallsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons style={{ color: tintColor, top: HP('0.3%') }} name="ios-call" size={HP('4%')} />
        ),
        tabBarLabel: 'My calls'
      })
    },
    TEAM_SCREEN: {
      screen: TeamStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons style={{ color: tintColor, top: HP('0.3%') }} name="ios-contacts" size={HP('4%')} />
        ),
        tabBarLabel: 'Team'
      })
    },
    SETTINGS_SCREEN: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons style={{ color: tintColor, top: HP('0.3%') }} name="ios-settings" size={HP('4%')} />
        ),
        tabBarLabel: 'Settings'
      })
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      lazy: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
      style: {
        backgroundColor: '#0D8B4E',
        height: HP('7.8%')
      },
      labelStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: HP('2%')
      }
    }
  }
)

AppStack.navigationOptions = {
  header: null
}

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthScreen,
      Initial: InitialScreen,
      Medium: MediumScreen
    },
    {
      initialRouteName: 'Initial'
    }
  )
)

export default AppNavigator
