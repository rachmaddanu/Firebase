import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = (props) => {
    
    const { textStyle, buttonStyle } = styles;
    buttonStyle.backgroundColor = props.bgcolor || '#841584'; //kalau bgcolor = 0, diganti warna default
    //
    //onPress harus return sebuah function, maka buttonpress nanti harus return function
    return (
    <TouchableOpacity style={buttonStyle} onPress={props.buttonPressed} > 
    {/* <TouchableOpacity style={{...buttonStyle, backgroundColor: props.bgcolor|| '#841584'}} */}
        <Text style={textStyle}> {props.children} </Text>
    </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#841584',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#ddd'

    }
};

export { CustomButton };