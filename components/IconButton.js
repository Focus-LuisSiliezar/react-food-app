import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


function IconButton({ onPress, icon, color }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed ? style.pressed : null}
        >
            <MaterialIcons
                name={icon}
                size={24}
                color={color} />
        </Pressable>
    );

}

export default IconButton;

const style = StyleSheet.create({
    pressed:{
        opacity: 0.6,
    }
});