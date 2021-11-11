import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('zero', () => App)
AppRegistry.runApplication('zero', {
  rootTag: document.getElementById('root'),
})
