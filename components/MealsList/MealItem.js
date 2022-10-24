import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";


function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });

    }



    return (
        <View style={style.mealItem}>
            <Pressable
                android_ripple={{ color: '#e6e3e3' }}
                style={({ pressed }) => (pressed ? style.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image style={style.image} source={{ uri: imageUrl }} />
                    <Text style={style.title} >{title}</Text>
                </View>
                <MealDetails
                    affordability={affordability}
                    complexity={complexity}
                    duration={duration}
                />
            </Pressable>
        </View>
    );

}
export default MealItem;

const style = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: "hidden",
        elevation: 2,
        backgroundColor: '#16141c',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 12,
        marginBottom: 4,
        color: 'white',
    },

})