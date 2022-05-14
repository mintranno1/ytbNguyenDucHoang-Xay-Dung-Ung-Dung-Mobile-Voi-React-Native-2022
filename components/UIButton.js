import React, {Components} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';

const UIButton = (props) => {

    const {onPress, title, isSelected} = props;

    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 2,
            height: 76,
            borderRadius: 10,
            marginHorizontal: 100,
            marginBottom: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isSelected == true ? 'white' : null
        }}
    >
        {isSelected == true && <Icon
            name={'check-circle'}
            style={{
                color: 'green',
                position: 'absolute',
                left: 20,
                top: 20
            }}
            size={30}
        ></Icon>}
        <Text style={{
            color: isSelected == true ? colors.primary : 'white',
            fontSize: 23
        }}>{title}</Text>
    </TouchableOpacity>
}

export default UIButton;