import { View, Text, StyleSheet } from "react-native";

function MealList({ data }) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={style.listItem}>
            <Text style={style.regularText} >{dataPoint}</Text>
        </View>

    ));
}

export default MealList;

const style = StyleSheet.create({
    listItem:{
        marginVertical: 2,
    },
    regularText:{
        color: 'white',
    },
});