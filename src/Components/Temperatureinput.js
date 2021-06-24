import React from 'react';

const scaleNames ={
    c:'celsius',
    f:'fahrenheit',
}
export default class Temperatureinput extends React.Component{
    state ={
        tempetature:''
    }
    onTempetatureChange = (e) =>{
        this.setState({
            tempetature:e.target.value
        })
    }
    render(){
        const {tempetature} = this.state;
        const {scale} = this.props;
        return(
            <>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input 
                            type="text" 
                            value={tempetature}
                            onChange={this.onTempetatureChange} />
                </fieldset>
            </>
        )
    }
}