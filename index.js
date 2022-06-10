
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import {Welcome, Login, Register, FoodList, ProductGridView, Settings} from './screens';

AppRegistry.registerComponent(appName, 
    () => () => <Settings />
);
