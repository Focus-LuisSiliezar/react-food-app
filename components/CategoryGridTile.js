import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={style.gridItem}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#ccc' }}
                //  STYLE FOR IOS
                style={({ pressed }) => [
                    style.button,
                    pressed ? style.buttonPressed : null,
                ]}>
                <View style={[style.innerContainer, { backgroundColor: color }]}>
                    <Text style={style.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const style = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 5,
        shadowRadius: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    }
});