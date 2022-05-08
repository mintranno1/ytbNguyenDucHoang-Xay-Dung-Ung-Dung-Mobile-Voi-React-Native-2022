
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import WelcomeScreen from './screens/WelcomeScreen';

const fakedProducts = [
    {
        productName : 'Iphone 1',
        year: 2013
    },
    {
        productName : 'Iphone 5',
        year: 2016
    },
    {
        productName : 'Iphone 8',
        year: 2015
    }
]

const text = 'hello!';

AppRegistry.registerComponent(appName, 
    () => () => <WelcomeScreen 
                    x={1} y={2} 
                    person={{
                        name: 'Nguyen thanh le',
                        age: 18,
                        email: 'thanhle@gmail.com'
                    }}
                    products = {fakedProducts}
                />
);
