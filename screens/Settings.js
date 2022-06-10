import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    ScrollView, 
    Switch
} from 'react-native';
import { colors, fontSize, images } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import UIHeader from '../components/UIHeader';


function Settings(props) {

    const [isEnabledLockApp, setIsEnabledLockApp] = useState(true)
    const [isUseFingerprint, setisUseFingerprint] = useState(false)
    const [isEnabledChangePassword, setIsEnabledChangePassword] = useState(false)

    return <View style={{
        flex: 1,
    }}>

        <UIHeader title={"Settings"} />
        <ScrollView>
            <View style={{
                height: 60,
                backgroundColor: colors.grayOp2,
                justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                <Text
                    style={{
                        color: colors.grayOp3,
                        fontSize: fontSize.h4,
                    }}
                >Common</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='globe'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Language</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingRight: 10,
                            opacity: .5
                        }}
                    >English</Text>
                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='globe'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Environment</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingRight: 10,
                            opacity: .5
                        }}
                    >Production</Text>
                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,

                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                height: 60,
                backgroundColor: colors.grayOp2,
                justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                <Text
                    style={{
                        color: colors.grayOp3,
                        fontSize: fontSize.h4,
                    }}
                >Account</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='phone'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Phone</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,

                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='envelope'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Email</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,

                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='sign-out-alt'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Sign out</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,

                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                height: 60,
                backgroundColor: colors.grayOp2,
                justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                <Text
                    style={{
                        color: colors.grayOp3,
                        fontSize: fontSize.h4,
                    }}
                >Security</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='door-closed'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Lock app in bacground</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Switch
                        trackColor={{ false: colors.inactive, true: colors.primary  }}
                        thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            setIsEnabledLockApp(!isEnabledLockApp)
                        }}
                        value={isEnabledLockApp}
                        
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='fingerprint'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Use fingerprint</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Switch
                        trackColor={{ false: colors.inactive, true: colors.primary }}
                        thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            setisUseFingerprint(!isUseFingerprint)
                        }}
                        value={isUseFingerprint}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='lock'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Change password</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Switch
                        trackColor={{ false: colors.inactive, true: colors.primary }}
                        thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            setisEnabledChangePassword(!isEnabledChangePassword)
                        }}
                        value={isEnabledChangePassword}
                    />
                </View>
            </View>
            <View style={{
                height: 60,
                backgroundColor: colors.grayOp2,
                justifyContent: 'center',
                paddingHorizontal: 10
            }}>
                <Text
                    style={{
                        color: colors.grayOp3,
                        fontSize: fontSize.h4,
                    }}
                >Misc</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='file-alt'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Term of Sevices</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>                    
                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,

                        }}
                        size={23}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='passport'
                        style={{
                            color: colors.black
                        }}
                        size={23}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: fontSize.h4,
                            paddingLeft: 10
                        }}
                    >Open source licenses</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                   
                    <Icon
                        name='chevron-right'
                        style={{
                            color: colors.black,
                        }}
                        size={23}
                    />
                </View>
            </View>
        </ScrollView>
    </View>

}
export default Settings

