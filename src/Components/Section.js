import React from 'react'
import Content from './Content'

export default function Section({theme}) {
    return (
        <div>
            <h1>hello i am a Section</h1>
            <Content theme={theme}/>
        </div>
    )
}

