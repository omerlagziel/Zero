import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './store'
import { RootStackParamList } from './navigation/navigation'
import Menu from './features/menu/Menu'
import Reviews from './features/reviews/Reviews'
import Review from './features/review/Review'

const TabStack = createBottomTabNavigator<RootStackParamList>()

const Tabs = () => (
  <TabStack.Navigator initialRouteName="Menu">
    <TabStack.Group>
      <TabStack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          // headerTransparent: true,
          headerTitleAlign: 'center',
          tabBarBadge: 1,
        }}
      />
      <TabStack.Screen
        name="Menu"
        component={Menu}
        options={{
          // headerTransparent: true,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Group>
  </TabStack.Navigator>
)

const Stack = createNativeStackNavigator()

type Props = {
  children: React.ReactNode
}

const App = ({}: Props) => {
  // const linking = {
  //   config: {
  //     screens: {
  //       Reviews: 'reviews',
  //       Review: 'review',
  //       Menu: 'menu',
  //     },
  //   },
  // }
  const linking = {
    prefixes: ['https://mavis.dev', 'mavis://'],
    config: {
      screens: {
        Tabs: {
          path: 'tabs',
          initialRouteName: 'Reviews',
          screens: {
            Reviews: 'reviews',
            Menu: {
              path: 'menu/:id',
              parse: {
                id: Number,
              },
            },
          },
        },
        Review: 'review',
      },
    },
  }

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
