import { Image, Pressable, StyleSheet, Text, View } from "react-native";


function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={style.mealItem}>
            <Pressable
                android_ripple={{ color: '#e6e3e3' }}
                style={({ pressed }) => (pressed ? style.buttonPressed : null)}
            >
                <View>
                    <Image style={style.image} source={{ uri: imageUrl }} />
                    <Text style={style.title} >{title}</Text>
                </View>
                <View style={style.details}>
                    <Text style={style.detailsItem} >Avg Time: {duration}m</Text>
                    <Text style={style.detailsItem} >{complexity.toUpperCase()}</Text>
                    <Text style={style.detailsItem} >{affordability.toUpperCase()}</Text>
                </View>
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
})