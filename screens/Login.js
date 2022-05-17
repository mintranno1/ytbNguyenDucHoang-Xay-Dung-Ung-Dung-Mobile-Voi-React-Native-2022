import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import { UIButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images, icons } from '../constants';



const Login = (props) => {
	const [keyboardDidShow, setKeyboardDidShow] = useState(false)

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => {
			// alert('KeyboardDidShow')
			setKeyboardDidShow(true)
		})
		Keyboard.addListener('keyboardDidHide', () => {
			// alert('KeyboardDidHide')
			setKeyboardDidShow(false)
		})
	})

	return <KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={{
			flex: 100,
			backgroundColor: 'white'
		}}>
		<View style={{
			flex: 100,
			backgroundColor: 'white',
			marginHorizontal: 15
		}}>
			<View style={{
				flex: 35,
				height: 350,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}>
				<Text style={{
					color: colors.primary,
					fontWeight: 'bold',
					fontSize: 46,
					flex: 1
				}}>Already have an Account?</Text>
				<Image
					style={{
						width: 400,
						height: 400,
						flex: 1
					}}
					source={
						images.foodLogin
					} />
			</View>
			<View style={{
				flex: 25
			}}>
				<View>
					<Text style={{
						fontSize: fontSize.h3,
						color: 'black'
					}}>Email:</Text>
					<TextInput
						style={{
							height: 40,
							fontSize: fontSize.h2
						}}
						placeholder="example@gmail.com"
						placeholderTextColor={colors.placeholder}
					/>
					<View style={{ width: '100%', height: 1, backgroundColor: colors.primary }} />
				</View>
				<View style={{
					marginTop: 15
				}}>
					<Text style={{
						fontSize: fontSize.h3,
						color: 'black'
					}}>Password:</Text>
					<TextInput
						style={{
							height: 40,
							fontSize: fontSize.h2
						}}
						secureTextEntry={true}
						placeholder="Enter your password"
						placeholderTextColor={colors.placeholder}

					/>
					<View style={{ width: '100%', height: 1, backgroundColor: colors.primary }} />
				</View>

			</View>
			{ keyboardDidShow == false && <View style={{
					flex: 20
				}}>
					<TouchableOpacity
						onPress={() => {
							alert('press login')
						}}
						style={{
							backgroundColor: colors.primary,
							justifyContent: 'center',
							alignItems: 'center',
							width: '50%',
							alignSelf: 'center',
							borderRadius: 15
						}}
					>
						<Text
							style={{
								padding: 8,
								color: colors.white,
								fontWeight: 'bold',
								fontSize: fontSize.h2
							}}
						>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							alert('press register')
						}}
						style={{ padding: 5 }}
					>
						<Text
							style={{
								padding: 8,
								fontSize: fontSize.h3,
								color: colors.primary,
								alignSelf: 'center'
							}}
						>New user? Register now</Text>
					</TouchableOpacity>
				</View>
			}
			<View style={{
				flex: 20,

			}}>
				<View
					style={{
						height: 40,
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
					<Text style={{
						padding: 8,
						fontSize: fontSize.h5,
						color: colors.black,
						alignSelf: 'center',
						marginHorizontal: 10
					}}>Use other methods</Text>
					<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
				</View>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
					<Icon name='facebook' size={35} color={colors.facebook} />
					<View style={{ width: 15 }} />
					<Icon name='google' size={35} color={colors.google} />
				</View>
			</View>
		</View>
	</KeyboardAvoidingView>
}

export default Login;