// import ClockLIst from '../src/Components/ClockLIst';
// import Form from "../src/Components/From"
// import Calculator from "./Components/TempCalculator/Calculator";
// import Text from "./Components/inheritance/Text";
// import Emoji from './Components/Composition/Emoji'
// import Bracket from './Components/Composition/Baracket';
import ClickCounter from "./Components/HOComponent/ClickCounter";
import Counter from "./Components/HOComponent/Counter";
import HoverCounter from "./Components/HOComponent/HoverCounter";



function App() {
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
            
            <Counter render={(counter,incrementCount) =>  <ClickCounter counter={counter} incrementCount={incrementCount}  />} />
            <Counter render={(counter,incrementCount) =>  <HoverCounter counter={counter} incrementCount={incrementCount}  />} />
            
        </div>
    );
}

export default App;
