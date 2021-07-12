import React from 'react'

export default function HoverCounter({count,incrementCount,theme ,switchTheme}) {
     const style = theme === 'dark' ? {backgroundColor:'black', color:'white'} : null ;


        return(
            <div>
                <h1 style={style} onMouseOver={incrementCount}  >Hover ME ({count})</h1>
            <button type="button" onClick={switchTheme}>click me</button>
            </div>
        )
}





