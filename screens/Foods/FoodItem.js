import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { colors, fontSize } from '../../constants';


// function _getColorFromStatus(status){
//     if(status.toLowerCase().trim() == 'opening now'){
//         return colors.success
//     }else if(status.toLowerCase().trim() == 'closing soon'){
//         return colors.alert
//     }else if(status.toLowerCase().trim() == 'comming soon'){
//         return colors.warning
//     }
//     return colors.success
// }

function _getColorFromStatus(status) {
    return status.toLowerCase().trim() == 'opening now' ? colors.success :
        (status.toLowerCase().trim() == 'closing soon' ? colors.alert :
            (status.toLowerCase().trim() == 'comming soon') ? colors.warning : colors.success)
}


const FoodItem = (props) => {
    const { food } = props;
    let {name, url_image, price, status} = food;
    const {onPress} = props;
    return <TouchableOpacity onPress={onPress}>
        <View style={{
        flex: 1
    }}>

        <View style={{            
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row'
        }}>
            <Image
                style={{
                    width: 180,
                    height: 180,
                    resizeMode: 'cover'
                }}
                source={{
                    uri: url_image
                }}
            />
            <View style={{

                flex: 1,
                marginLeft: 15,
                marginRight: 10
            }}>
                <Text
                    style={{
                        color: colors.black,
                        fontSize: fontSize.h3,
                        fontWeight: 'bold'
                    }}
                >
                    {name}
                </Text>
                <View style={{ height: 1, backgroundColor: colors.grayOp1, marginTop: 5 }} />
                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                    <Text style={{
                        color: colors.black,
                        fontSize: fontSize.h5,

                    }}>Status:</Text>
                    <Text style={{
                        fontSize: fontSize.h5,
                        paddingLeft: 6,
                        color: _getColorFromStatus(status),
                        fontWeight: 'bold'
                    }}>{status.toUpperCase()}</Text>
                </View>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSize.h5,

                }}>Price: ${price}</Text>
                <Text style={{
                    color: colors.black,
                    fontSize: fontSize.h5,

                }}>Food Type: Pizza</Text>
            </View>
        </View>


    </View>
    </TouchableOpacity>

}

export default FoodItem;