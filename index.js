
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import Welcome from './screens/Welcome';

AppRegistry.registerComponent(appName, 
    () => () => <Welcome />
);
