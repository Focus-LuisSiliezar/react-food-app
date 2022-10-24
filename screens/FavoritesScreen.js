import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
    const favoritesMealContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoritesMealContext.ids.includes(meal.id))
    if (favoriteMeals.length === 0) {
        return (
            <View style={style.rootContainer}>
                <Text style={style.text}>No favorites meals</Text>
            </View>
        );
    } else {
        return (
            <MealsList items={favoriteMeals} />
        );
    }
}

export default FavoritesScreen;

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'white',

    }
});