import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
    // GETTING IDS FROM PROVIDER 
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    // FILTER FUNCTION
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsIds.includes(meal.id)
    );

    // CHECKING IF DATA IS NULL
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