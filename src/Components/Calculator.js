import React from 'react';
import Temperatureinput from '../Components/Temperatureinput'

export default class Calculator extends React.Component{
    render(){
        return(
            <>
            <Temperatureinput scale="c" />
            <Temperatureinput scale="f" />
                {/* <BoilinhVerdict celsius={parseFloat(tempetature)} /> */}
            </>
        )
    }
}