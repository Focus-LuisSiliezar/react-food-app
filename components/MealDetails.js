import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealDetails({duration, complexity, affordability}) {
    return (
        <View style={style.details}>
            <Text style={style.detailsItem} >{duration}m</Text>
            <Text style={style.detailsItem} >{complexity.toUpperCase()}</Text>
            <Text style={style.detailsItem} >{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const style = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,

    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14,
        color: 'white',
    }
});