import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#16141c' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#2d283d' }
          }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
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
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
