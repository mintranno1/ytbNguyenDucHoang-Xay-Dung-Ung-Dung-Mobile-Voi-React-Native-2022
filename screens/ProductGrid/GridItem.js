import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { colors, fontSize, images } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FiveStars from './FiveStars';

const GridItem = (props) => {
    const {item, index, onPressIsSaved} = props;

    return <View style={{
        // backgroundColor: index % 2 == 0 ? 'green' : 'red',
        flex: 0.5,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: index == 0 || index == 1 ? 10 : 5,
        marginRight: 10,
        marginBottom: 5,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.inactive
    }}>
        <View style={{
            width: '100%',
            height: 200,
            backgroundColor: 'red',
        }}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                }}
                source={{
                    uri: item.url
                }}
            />
        </View>
        <Text style={{
            width: 50,
            height: 50,
            color: colors.white,
            fontSize: fontSize.h2,
            textAlign: 'center',
            lineHeight: 50,
            fontWeight: 'bold',
            position: 'absolute',
            zIndex: 1,
            top: 10,
            right: 10,
            backgroundColor: 'red',
            borderRadius: 50
        }}>${item.price}</Text>
        <Text style={{
            fontSize: fontSize.h2,
            marginHorizontal: 10,
            marginTop: 5,
            color: colors.black
        }}>{item.productName}</Text>
        {
            item.specifications.map((specification) =>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSize.h4,
                    marginHorizontal: 10
                }}>* {specification}</Text>
            )
        }
        <View style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center'
        }}>
            <TouchableOpacity
                onPress={onPressIsSaved}
                style={{
                    flexDirection: 'row',

                }}
            >
                <Icon name='heart'
                    size={25}
                    color={item.isSaved == undefined || item.isSaved == false
                        ? colors.inactive : colors.red}
                    
                />
                
                <Text style={{
                    width: 110,
                    color: item.isSaved == undefined || item.isSaved == false
                        ? colors.inactive : colors.red,
                    paddingStart: 7,
                    fontSize: fontSize.h4
                }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-end'
            }}>
                <FiveStars numberOfStars={item.stars} />
                <Text style={{
                    color: 'blue',
                    fontSize: fontSize.h4,
                    paddingTop: 5,
                    color: colors.success
                }}>{item.reviews} reviews</Text>
            </View>
        </View>
    </View>
}

export default GridItem