import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images } from '../../constants';
import {
    View,
} from 'react-native';

function FiveStars(props) {
    const { numberOfStars } = props

    return <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }}>
        {
            [0, 1, 2, 3, 4].map(item => <Icon
                key={`${item}`}
                name='star'
                style={{

                }}
                size={17}
                color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
            />)
        }
    </View>
}

export default FiveStars