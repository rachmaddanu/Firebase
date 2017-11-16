import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = (props) => {
    const { 
        labelStyle,
        containerStyle,
        inputStyle
        } = styles;

    const {
        text,
        placeholder,
        textChanged,
        secureOps = false
        } = props;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{text}</Text>
            <TextInput 
                style={inputStyle} 
                placeholder={placeholder}
                onChangeText={textChanged} 
                secureTextEntry={secureOps}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
        padding: 5,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 20,
        flex: 4
    }
};

export { Input };