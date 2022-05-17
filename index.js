
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import {Welcome, Login} from './screens';

AppRegistry.registerComponent(appName, 
    () => () => <Login />
);
