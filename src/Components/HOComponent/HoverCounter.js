import React from 'react'

export default function HoverCounter({counter,incrementCount,theme}) {
     const style = theme === 'dark' ? {backgroundColor:'black', color:'white'} : null ;
    //const style = {backgroundColor:'black', color:'white'}

        return(
            <div>
                <h1 style={style} onMouseOver={incrementCount}  >Hover ME ({counter})</h1>
            </div>
        )
}





