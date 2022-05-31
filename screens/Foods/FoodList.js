import React, { useEffect, useState } from 'react';
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ScrollView,
	FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images } from '../../constants';
import { isValidEmail, isValidPassword } from '../../utilies/Validations';
import FoodItem from './FoodItem';

const FoodList = (props) => {
	const [Foods, setFoods] = useState([
		{
			id: 1,
			name: 'Pizza',
			price: 100000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'closing soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 2,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},

		{
			id: 3,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 4,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 5,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},

		{
			id: 6,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 7,
			name: 'Pizza',
			price: 99000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 8,
			name: 'Bún bò',
			price: 59000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]

		},
		{
			id: 9,
			name: 'Hủ tiếu',
			price: 80000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening Now',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 10,
			name: 'Phở',
			price: 50000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 11,
			name: 'Bánh mì',
			price: 20000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Comming soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 12,
			name: 'Nem',
			price: 5000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 13,
			name: 'Bánh tết',
			price: 30000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		},
		{
			id: 14,
			name: 'Bánh canh',
			price: 2000000,
			url_image: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
			status: 'Opening soon',
			social: [
				{
					facebook: 'https:www.facebook.com',
					twitter: 'https:www.facebook.com',
					instagram: 'https:www.facebook.com'
				}
			]
		}
	])
	const [categories, setCategories] = useState([
		{
			id: 1,
			name: 'BBQ',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 2,
			name: 'Breakfast',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 3,
			name: 'Coffee',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 4,
			name: 'Noodles',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 5,
			name: 'Dinner',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 6,
			name: 'Beverages',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 7,
			name: 'Dessert',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 8,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 9,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 10,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 11,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 12,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 13,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 14,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 15,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		},
		{
			id: 16,
			name: 'Wine',
			url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp'
		}
	])

	return <View style={{
		flex: 1
	}}>
		
		<View style={{
			height: 100,
		}}>
			<View style={{ height: 1, backgroundColor: colors.inactive }}></View>
			<FlatList
				horizontal
				style={{ flex: 1 }}
				data={categories}
				renderItem={({ item }) => {
					return <TouchableOpacity
					 	onPress={() => {
							 alert(`Press ${item.name}`)
						 }}
						style={{
						margin: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Image
							style={{
								width: 50,
								height: 50,
								resizeMode: 'cover',
								borderRadius: 50,

								backgroundColor: 'red'
							}}
							source={{
								uri: item.url
							}}
						/>
						<Text
							style={{
								color: colors.black,
								fontSize: fontSize.h5,
								marginTop: 8
							}}>{item.name}</Text>
					</TouchableOpacity>
				}}
				keyExtractor={item => item.id}
			/>


			<View style={{ height: 1, backgroundColor: colors.inactive }}></View>
		</View>

		{/* <ScrollView>
			{
				Foods.map((eachFood) => <FoodItem key={eachFood.id} Food = {eachFood}/>)
			}
		</ScrollView> */}
		<FlatList
			data={Foods}
			renderItem={({ item }) => {
				return <FoodItem
					onPress={() => { alert(`Id: ${item.id} - Name: ${item.name}`) }}
					food={item} />
			}}
			keyExtractor={item => item.id}
		/>
	</View >
}

export default FoodList;