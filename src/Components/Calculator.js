import React from 'react';
import Temperatureinput from './TemperatureInput'
import { convert,toCelsius,toFahrenheit } from '../lib/converter';
import BoilinhVerdict  from './BoilingVerdict';

export default class Calculator extends React.Component{
    state ={
             temperature:'', 
             scale: 'c'
            }
    handelChange = ( e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }
    render(){
        const {temperature,scale} = this.state;
        const celsius = scale ==='f'? convert(temperature,toCelsius) : temperature;
        const fahrenheit = scale ==='c'? convert(temperature,toFahrenheit) : temperature;
        return(
            <>
            <Temperatureinput scale="c" temperature={celsius} onTemperatureChange={this.handelChange}/>
            <Temperatureinput scale="f" temperature={fahrenheit} onTemperatureChange={this.handelChange}/>
                <BoilinhVerdict celsius={parseFloat(temperature)} />
            </>
        )
    }
}