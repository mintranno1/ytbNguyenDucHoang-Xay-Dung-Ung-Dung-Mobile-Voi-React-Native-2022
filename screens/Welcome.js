import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { UIButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images, icons} from '../constants';

const Welcome = (props) => {

    let [accountTypes, setAccountypes] = useState([
        {
            id: 1,
            name: 'Influencer',
            isSelected: true,
        },
        {
            id: 2,
            name: 'Business',
            isSelected: false
        },
        {
            id: 3,
            name: 'Individual',
            isSelected: false
        }
    ])

    return <View style={{
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 1
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    flex: 20,

                }}><View style={{
                    flex: 1,
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}><Image
                        source={icons.iconWelcome}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                    <Text
                        style={{
                            fontSize: fontSize.h2,
                            fontWeight: 'bold',
                            marginLeft: 5,
                            color: 'white'
                        }}>YOURLOGOS</Text>

                    <View style={{ flex: 1 }}></View>
                    <Icon
                        name={'question-circle'}
                        style={{
                            color: 'white',

                        }}
                        size={30}
                    ></Icon>
                </View>
            </View>

            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    marginBottom: 5,
                    fontSize: fontSize.h1,
                    fontWeight: 'bold',
                    color: 'white'
                }}>WELCOME TO YOURLOGOS</Text>
                <Text style={{
                    fontSize: fontSize.h2,
                    color: 'white'
                }}>Please select your account type !</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                {accountTypes.map((accountType) => <UIButton key={accountType.id}
                    onPress={() => {
                        setAccountypes(accountTypes.map((eachAccountType) => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        }));
                    }}
                    title={accountType.name}
                    isSelected={accountType.isSelected}
                />)}
            </View>
            <View style={{
                flex: 20,
                justifyContent:'center'
            }}>
                <UIButton title={"login".toUpperCase()} />
                <Text style={{
                    color: 'white',                    
                    justifyContent:'center',
                    alignSelf:  'center',
                    fontSize: fontSize.h3
                }}>Want to register new Account ?</Text>
                <Text style={{
                    color: 'white',                    
                    justifyContent:'center',
                    alignSelf:  'center',
                    fontSize: fontSize.h3,
                    textDecorationLine: 'underline'
                }}>Register</Text>
                

            </View>
        </ImageBackground>
    </View>
}

export default Welcome;