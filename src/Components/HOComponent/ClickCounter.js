import React from 'react'

export default class ClickCounter extends React.Component{
    render(){
        const {count,incrementCount} = this.props;
        return(
            <div>
                <button onClick={incrementCount}>click me {count}</button>
            </div>
        )
    }
}

