
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import Welcome from './screens/Welcome';

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

AppRegistry.registerComponent(appName, 
    () => () => <Welcome products = {fakedProducts}/>
);
