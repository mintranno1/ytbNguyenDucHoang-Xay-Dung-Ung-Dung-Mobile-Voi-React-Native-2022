import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images, icons } from '../constants';
import { isValidEmail, isValidPassword } from '../utilies/Validations';

const Register = (props) => {

	const [keyboardDidShow, setKeyboardDidShow] = useState(false)

	// State for validating
	const [errEmail, setErrEmail] = useState('')
	const [errPassword, setErrPassword] = useState('')

	// State to state email/password
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const isValidationOK = () => email.length > 0 && password.length > 0
		&& isValidEmail(email) == true
		&& isValidPassword(password) == true

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

	return <KeyboardAwareScrollView style={{ backgroundColor: colors.primary }}>
		<View style={{
			flex: 100,
			marginHorizontal: 15
		}}>
			<View style={{
				flex: 40,
				height: 350,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'green'

			}}>
				<Text style={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 46,
					flex: 1
				}}>Already have an Account ?</Text>
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
				flex: 30,
				backgroundColor: 'yellow'
			}}>
				<View>
					<Text style={{
						fontSize: fontSize.h3,
						color: 'black',

					}}>Email:</Text>
					<TextInput
						onChangeText={(text) => {
							// if(ValidateEmail(text) == false){
							// 	setErrEmail('Email not in correct format')
							// }else{
							// 	setErrEmail('')
							// }
							// setPassword(text)
							setErrEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
							setEmail(text)
						}}
						style={{
							height: 40,
							fontSize: fontSize.h2
						}}
						placeholder="example@gmail.com"
						placeholderTextColor={colors.placeholder}
					/>
					<View style={{ width: '100%', height: 1, backgroundColor: colors.primary }} />
					<Text style={{
						color: colors.primary,
						fontSize: fontSize.h5,
						marginTop: 10,
						fontWeight: 'bold'
					}}>{errEmail}</Text>
				</View>
				<View style={{
					marginTop: 5
				}}>
					<Text style={{
						fontSize: fontSize.h3,
						color: 'black'
					}}>Password:</Text>
					<TextInput
						onChangeText={(pass) => {

							setErrPassword(isValidPassword(pass) == true ? '' : 'Password must be at least 3 characters')
							setPassword(pass)
						}}
						style={{
							height: 40,
							fontSize: fontSize.h2
						}}
						secureTextEntry={true}
						placeholder="Enter your password"
						placeholderTextColor={colors.placeholder}

					/>
					<View style={{ width: '100%', height: 1, backgroundColor: colors.primary }} />
					<Text style={{
						color: colors.primary,
						fontSize: fontSize.h5,
						marginTop: 10,
						fontWeight: 'bold'
					}}>{errPassword}</Text>
				</View>
				<View style={{
					marginTop: 5
				}}>
					<Text style={{
						fontSize: fontSize.h3,
						color: 'black'
					}}>Retype Password:</Text>
					<TextInput
						onChangeText={(pass) => {

							setErrPassword(isValidPassword(pass) == true ? '' : 'Password must be at least 3 characters')
							setPassword(pass)
						}}
						style={{
							height: 40,
							fontSize: fontSize.h2
						}}
						secureTextEntry={true}
						placeholder="Re-Enter your password"
						placeholderTextColor={colors.placeholder}

					/>
					<View style={{ width: '100%', height: 1, backgroundColor: colors.primary }} />
					<Text style={{
						color: colors.primary,
						fontSize: fontSize.h5,
						marginTop: 10,
						fontWeight: 'bold'
					}}>{errPassword}</Text>
				</View>

			</View>
			{keyboardDidShow == false && <View style={{
				flex: 10,
				backgroundColor: 'purple'
			}}>
				<TouchableOpacity
					disabled={isValidationOK() == false}

					onPress={() => {
						alert(`Email: ${email} - Pass: ${password}`)
					}}
					style={{
						backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
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
					>Register</Text>
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

			{keyboardDidShow == false && <View style={{
				flex: 25,
				justifyContent: 'center',
				backgroundColor: 'blue'
			}}>
				<View
					style={{
						height: 40,
						flexDirection: 'row',
						alignItems: 'center',

					}}
				>
					<View style={{ flex: 1, height: 1, backgroundColor: colors.white }} />
					<Text style={{
						padding: 8,
						fontSize: fontSize.h5,
						color: colors.white,
						alignSelf: 'center',
						marginHorizontal: 10
					}}>Use other methods</Text>
					<View style={{ flex: 1, height: 1, backgroundColor: colors.white }} />
				</View>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
					<Icon name='facebook' size={35} color={colors.white} />
					<View style={{ width: 15 }} />
					<Icon name='google' size={35} color={colors.white} />
				</View>
			</View>
			}
		</View>
	</KeyboardAwareScrollView>
}

export default Register;