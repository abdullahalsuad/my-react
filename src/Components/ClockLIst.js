import React from 'react';
import Clock from './Clock';

function ClockLIst({quantity = []}) {
    return (
        <>
            <div>
                {quantity.map(() => (
                    <Clock key={Math.random()} /> 
                ))}
            </div>
       </>
    )
}

export default ClockLIst
