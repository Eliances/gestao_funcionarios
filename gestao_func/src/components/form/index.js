import React from "react"
import { View, Text, TextInput } from "react-native"

export default function form() {
    return (
        <View>
            <View>
                <Text>Nome:</Text>
                <TextInput
                    placeholder="Ex. João"
                    keyboardType="default"
                    autoCapitalize="none"></TextInput>
                <Text>Sobrenome:</Text>
                <TextInput
                    placeholder="Ex. Silva"
                    keyboardType="default"
                    autoCapitalize="none"></TextInput>
            </View>
        </View>
    );
}