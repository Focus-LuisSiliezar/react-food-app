import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Feather } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#16141c' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#2d283d' },
        drawerContentStyle: { backgroundColor: '#2e2841' },
        drawerInactiveTintColor: '#a49db8',
        drawerActiveTintColor: '#d1c8e9',
        drawerActiveBackgroundColor: '#524577'
      }}
    >
      <Drawer.Screen name='DrawerCategories' component={CategoriesScreen} options={{
        title: 'Categories',
        drawerIcon: ({ color }) => <Feather name='home' color={color} size={18} />
      }} />
      <Drawer.Screen name='DrawerFavs' component={FavoritesScreen} options={{
        title: 'Favorites',
        drawerIcon: ({ color }) => <Feather name='star' color={color} size={18} />
      }} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#16141c' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#2d283d' }
            }}>
            <Stack.Screen
              name='MealsCategories'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId
            //   };
            // }}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
            // options={{
            //   headerRight: ()=> {
            //     return <Text>in the header</Text>
            //   }
            // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
