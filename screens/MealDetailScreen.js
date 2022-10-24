import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, Pressable } from "react-native";
import MealDetails from "../components/MealDetails";
import MealList from "../components/MealList";
import { MEALS } from '../data/dummy-data';
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../store/redux/favorites'

function MealDetailScreen({ route, navigation }) {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const mealId = route.params.mealId;
    const dispatch = useDispatch();
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'About the meal',
            headerRight: () => {
                return <IconButton onPress={changeFavoriteStatusHandler} color='white' icon={mealIsFavorite ? 'star' : 'star-border'} />
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView>
            <View style={style.rootContainer}>
                <Image style={style.image} source={{ uri: selectedMeal.imageUrl }} />
                <View style={style.titleContainer}>
                    <Text style={[style.subtitles, { textAlign: "center", fontSize: 24 }]}>{selectedMeal.title}</Text>
                    <MealDetails
                        affordability={selectedMeal.affordability}
                        complexity={selectedMeal.complexity}
                        duration={selectedMeal.duration}
                    />
                </View>
                <View style={style.listContainer}>
                    <View style={style.container}>
                        <Text style={style.subtitles}>Ingredients:</Text>
                        <MealList data={selectedMeal.ingredients} />
                    </View>
                    <View style={style.container}>
                        <Text style={style.subtitles}>Steps:</Text>
                        <MealList data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const style = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 14,
    },
    titleContainer: {
        marginTop: 14,
    },
    subtitles: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 18,
        marginBottom: 12,
    },
    container: {
        marginHorizontal: 15,
        marginVertical: 12,
        padding: 20,
        borderRadius: 12,
        backgroundColor: '#585072',
    },
    listContainer: {
        width: '95%',
    }
});