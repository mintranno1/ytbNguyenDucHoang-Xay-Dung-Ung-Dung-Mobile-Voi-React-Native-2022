import * as React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Welcome = (props) => {

    return <View style={{       
        flex: 100
    }}>
        <ImageBackground
            source={require(`../assets/images/background/welcome-bg.jpg`)}
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
                        source={require('../assets/images/icons/salad.png')}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 5,
                            color: 'white'
                        }}>YOURLOGOS</Text>

                    <View style={{ flex: 1 }}></View>
                    <Image
                        source={require('../assets/images/icons/question.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: 'white'
                        }}
                    />
                </View>
            </View>

            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',                                
            }}>
                <Text style={{
                    marginBottom: 5,
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'white'
                }}>WELCOME TO YOURLOGOS</Text>                                
                <Text style={{
                    fontSize: 19,
                    color: 'white'
                }}>Please select your account type !</Text>
            </View>
            <View style={{
                flex: 40,
                backgroundColor: 'purple'
            }}>
                <TouchableOpacity
                    style={{
                        borderColor: 'white',
                        borderWidth: 2,
                        height: 50,
                        borderRadius: 10,
                        marginHorizontal: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <Text style={{
                        color: '#ED6263',
                        fontSize: 23
                    }}>Influencer</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                flex: 20,
            }}><Text>A Foody Corporation</Text>
                <Text>Version 1.6</Text>
                
            </View>
        </ImageBackground>
    </View>
}

export default Welcome;