import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData) {
        const meal = itemData.item;
        const mealItemProps = {
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
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );

}
export default MealsOverviewScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});