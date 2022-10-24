import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {

    function renderMealItem(itemData) {
        const meal = itemData.item;
        const mealItemProps = {
            id: meal.id,
            title: meal.title,
            imageUrl: meal.imageUrl,
            affordability: meal.affordability,
            complexity: meal.complexity,
            duration: meal.duration,
        }
        return (
            <MealItem {...mealItemProps} />
        );
    }

    return (
        <View style={style.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});