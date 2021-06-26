// import ClockLIst from '../src/Components/ClockLIst';
// import Form from "../src/Components/From"
//import Calculator from "./Components/TempCalculator/Calculator";
//import Text from "./Components/inheritance/Text";
// import Emoji from './Components/Composition/Emoji'
// import Text from './Components/Composition/Text'
// import Bracket from './Components/Composition/Baracket';
import ClickCounter from "./Components/HOComponent/ClickCounter";
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
            <ClickCounter/>
            <HoverCounter />
            
        </div>
    );
}

export default App;
