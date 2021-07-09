import React from 'react';
import Counter from './HOComponent/Counter';
import HoverCounter from './HOComponent/HoverCounter'

export default function Content({theme}) {
    return (
        <div>
            <h1>hello i am contant</h1>
            <Counter>
            {(counter,incrementCount) =>  <HoverCounter counter={counter} incrementCount={incrementCount}  theme={theme}/>}
            </Counter>
        </div>
    )
}
