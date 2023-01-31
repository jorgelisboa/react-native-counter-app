import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, } from "react-native";

interface ButtonProps {
    color: String
}
export default function Button({ color } : ButtonProps) {
    const [value, setValue] = useState<number>(0)

    function handleValue(type:String) {
        if (type === '+') {
            setValue(value + 1)
            return
        }

        if (value > 0) {
            setValue(value - 1)            
        }
    }

    return (
        <View style={styleSheet.container}>
            <TouchableOpacity style={color === 'blue' ? styleSheet.blueButton : styleSheet.orangeButton} onPress={ () => handleValue('+') }>
                <Text style={styleSheet.buttonText}>{ '+' }</Text>
            </TouchableOpacity>
            
            <Text style={styleSheet.counterNumber}>{value.toString()}</Text>

            <TouchableOpacity style={color === 'blue' ? styleSheet.blueButton : styleSheet.orangeButton} onPress={ () => handleValue('-') }>
                <Text style={styleSheet.buttonText}>{ '-' }</Text>
            </TouchableOpacity>
        </View>
    )
}

const buttonSize = Dimensions.get('screen').width*0.2

const styleSheet = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    counterNumber: {
        fontSize: 72,
        color: '#ffffff',
    },
    blueButton: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 64,
        borderWidth: 2,
        borderColor: '#4169E1',
        borderStyle: 'solid',
        borderRadius: 8,
    },
    orangeButton: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 64,
        borderWidth: 2,
        borderColor: '#FF7F00',
        borderStyle: 'solid',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 48,
        color: '#ffffff',
    }
})