import React from 'react';
import Counter from './HOComponent/Counter';
import HoverCounter from './HOComponent/HoverCounter'
import ThemeContext from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function Content() {
    const context = useContext(ThemeContext);
    const {theme,switchTheme} = context;

    return (
        <div>
            <h1>hello i am contant</h1>
            <Counter>
            {(counter, incrementCount) => (
                  <HoverCounter
                  count={counter}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                  />
            )}
            </Counter>
        </div>
    )
}
