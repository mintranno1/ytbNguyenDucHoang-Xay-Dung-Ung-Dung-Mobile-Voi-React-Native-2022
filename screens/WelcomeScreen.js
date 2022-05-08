import * as React from 'react';
import { Text, View } from 'react-native';
import {sum2Number} from '../utilies/Calculation';

const WelcomeScreen = (props) => {
    const { person } = props;
    const {name, age, email} = person;
    
    const {products} = props;

    // debugger

    return < View style={{
        backgroundColor: 'white'
    }}>
        <Text>{` X = ${props.x}, y = ${props.y}`}</Text>
        <Text>Name = {name} - Age = {age} - Email = {email}</Text>
        {/* <Text>{JSON.stringify(products)}</Text> */}
        {
            products.map(eachProduct => <View>
                    <Text>{eachProduct.productName}, {eachProduct.year}</Text>
                    <Text>hello</Text>
                </View>)
        }
        <Text>Sum 2 and 3: {sum2Number(2,3)}</Text>
    </View> 
}

export default WelcomeScreen;