import React, { useState } from 'react';
import {
    FlatList, View
} from 'react-native';
import GridItem from './GridItem';

const ProductGridView = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: 'Máy lạnh SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage',
                'Convenience cord storage'
            ],
            reviews: 19,
            stars: 5,
            isSaved: true
        },
        {
            id: 2,
            productName: 'Máy giặt SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage'
            ],
            reviews: 19,
            stars: 1,
            isSaved: false
        },
        {
            id: 3,
            productName: 'Tủ lạnh SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage',
            ],
            reviews: 19,
            stars: 3,
            isSaved: true
        },
        {
            id: 4,
            productName: 'Tivi SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage',
                'Convenience cord storage'
            ],
            reviews: 19,
            stars: 4,
            isSaved: false
        },
        {
            id: 5,
            productName: 'Iphone SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage'
            ],
            reviews: 19,
            stars: 2,
            isSaved: true
        },
        {
            id: 6,
            productName: 'Sony SC 5573',
            url: 'https://img-global.cpcdn.com/recipes/90267c96d71f1775/640x640sq70/photo.webp',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage'
            ],
            reviews: 19,
            stars: 1,
            isSaved: true
        },


    ])

    function onPressIsSaved(item) {
        let clonedProducts = products.map((eachProduct) => {
            if (item.productName === eachProduct.productName) {
                return { ...eachProduct, isSaved: !eachProduct.isSaved }
            }
            return eachProduct
        })
        setProducts(clonedProducts)
       
    }

    return <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}
    >
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item, index }) => {
                return <GridItem
                    item={item}
                    index={index}
                    onPressIsSaved={() => onPressIsSaved(item)}
                />
            }}
            keyExtractor={item => item.id}
        />

    </View>
}

export default ProductGridView