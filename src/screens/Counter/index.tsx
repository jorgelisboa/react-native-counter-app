import { View, StyleSheet } from "react-native";
import CounterArea from "./CounterArea";

export default function Counter() {
    return (
        <View style={styleSheet.middle}>
            <CounterArea />
        </View>
    )
}

const styleSheet = StyleSheet.create({
    middle: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})