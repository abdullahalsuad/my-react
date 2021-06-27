import React from 'react'

export default class HoverCounter extends React.Component{
    render(){
        const {counter,incrementCount} = this.props;
        return(
            <div>
                <h1 onMouseOver={incrementCount} >Hover ME ({counter})</h1>
            </div>
        )
    }
}





