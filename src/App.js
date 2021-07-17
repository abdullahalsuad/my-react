import React from 'react'
// import ClockLIst from '../src/Components/ClockLIst';
// import Form from "../src/Components/From"
// import Calculator from "./Components/TempCalculator/Calculator";
// import Text from "./Components/inheritance/Text";
// import Emoji from './Components/Composition/Emoji'
// import Bracket from './Components/Composition/Baracket';
import ClickCounter from "./Components/HOComponent/ClickCounter";
import Counter from "./Components/HOComponent/Counter";
// import HoverCounter from "./Components/HOComponent/HoverCounter";
import Section from "./Components/Section";
import ThemeContext from './contexts/ThemeContext';

export default class App extends React.Component {
    state = {
        theme: 'dark',
        switchTheme: () =>{
            this.setState(({theme}) =>{
                if(theme === 'dark'){
                    return{
                        theme:'light',
                    }
                }
                return{
                    theme:'dark',
                }
            })
        }
    };

    render() {
        // const quantity =[1,2,3,4];
       
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
            {(counter,incrementCount) =>  <ClickCounter count={counter} incrementCount={incrementCount}  />}
            {/* {(counter,incrementCount) =>  <HoverCounter count={counter} incrementCount={incrementCount}  />} */}
            </Counter>
                
           <ThemeContext.Provider value={this.state} >
               <Section />
            </ThemeContext.Provider> 
            
        </div>
    )
    }
}

