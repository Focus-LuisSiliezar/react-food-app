import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, Pressable } from "react-native";
import MealDetails from "../components/MealDetails";
import MealList from "../components/MealList";
import { MEALS } from '../data/dummy-data';
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    function headerButtonPressHandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerButtonPressHandler}  color='white' icon='star'/>
            }
        });
    }, [navigation, headerButtonPressHandler]);

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