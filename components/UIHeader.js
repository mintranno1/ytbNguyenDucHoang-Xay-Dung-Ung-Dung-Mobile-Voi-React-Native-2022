import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { colors, fontSize } from '../constants';


function UIHeader(props) {
    const {title} = props

    return <View style={{
        height: 58,
        backgroundColor: colors.primary
    }}>
        <Text style={{
            fontSize: fontSize.h2,
            color: colors.white,
            fontWeight: 'bold',            
            lineHeight: 52,
            paddingHorizontal:10
        }}>{title}</Text>
    </View>
}

export default UIHeader