import { StyleSheet, View } from "react-native";
import Counter from "../../components/Counter";

export default function CounterArea() {
    return (
        <View style={styleSheet.counterArea}>
            <Counter color='blue' />
            <Counter color='orange' />
        </View>
    )
}

const styleSheet = StyleSheet.create({
    counterArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})