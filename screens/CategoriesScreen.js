import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import MealsOverviewScreen from './MealsOverviewScreen';

function CategoriesScreen({ navigation }) {
// RENDER FUNCTION
    function renderCategoryItem(itemData) {
        function pressHandler() {
        navigation.navigate('MealsOverview',{
            categoryId: itemData.item.id,
        });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />);
    }
// LIST
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />);
}

export default CategoriesScreen;