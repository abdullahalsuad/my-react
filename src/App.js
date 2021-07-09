import React from 'react'
// import ClockLIst from '../src/Components/ClockLIst';
// import Form from "../src/Components/From"
// import Calculator from "./Components/TempCalculator/Calculator";
// import Text from "./Components/inheritance/Text";
// import Emoji from './Components/Composition/Emoji'
// import Bracket from './Components/Composition/Baracket';
import ClickCounter from "./Components/HOComponent/ClickCounter";
import Counter from "./Components/HOComponent/Counter";
//import HoverCounter from "./Components/HOComponent/HoverCounter";
import Section from "./Components/Section";

export default class App extends React.Component {
    state = {
        theme: 'dark'
    };
    render() {
        // const quantity =[1,2,3,4];
        const {theme} = this.state;
    return (
        <div>
             {/* <ClockLIst quantity ={quantity} /> 
            <Form /> 
            <Calculator/> 
            <Emoji>
                {({addEmoji}) => (
                <Bracket>
                  {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>)}
            </Emoji> */}
            
            <Counter>
            {(counter,incrementCount) =>  <ClickCounter counter={counter} incrementCount={incrementCount}  />}
            </Counter>

            <Section theme={theme}/>
            
        </div>
    )
    }
}

