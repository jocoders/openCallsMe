import { createStackNavigator } from 'react-navigation'
import MyTeamScreen from './MyTeamScreen'
import TeamScreen from './TeamScreen'

import { MY_TEAM_SCREEN, TEAM_SCREEN } from '../routes'

const TeamStack = createStackNavigator(
  {
    [TEAM_SCREEN]: TeamScreen,
    [MY_TEAM_SCREEN]: MyTeamScreen
  },
  {
    headerMode: 'none'
  }
)

//TeamStack.navigationOptions = ({ navigation }) => {
//  let tabBarVisible = true
//  if (navigation.state.index > 0) {
//    tabBarVisible = false
//  }
//  return {
//    tabBarVisible
//  }
//}

export default TeamStack
