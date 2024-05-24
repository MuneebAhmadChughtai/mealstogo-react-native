import * as React from 'react';
import {ResturantScreen} from './src/features/resturants/screens/resturant.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RestaurantContextProvider} from './src/services/restaurants.context';
import {
  LocationContext,
  LocationContextProvider,
} from './src/services/location/location.context';

// import {restaurantsRequest} from './src/services/restaurants.service';
// require('./src/services/restaurants.service');

const MapsScreen = () => {
  return <Text>Map Screen</Text>;
};
const SettingsScreen = () => {
  return <Text>Settings Screen</Text>;
};

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'local-dining',
  Maps: 'map',
  Settings: 'settings',
};

const createScreenOptions = ({route}) => {
  const IconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <MaterialIcons name={IconName} color={color} size={size} />
    ),
  };
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Restaurants" component={ResturantScreen} />
      <Tab.Screen name="Maps" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

export default App;
