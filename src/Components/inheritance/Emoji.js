import React from 'react';

export default class Emoji extends React.Component{
    addEmoji = (text ,emoji) => `${emoji} ${text} ${emoji}`

    render(over){
       let text  = 'i am emoji Component';

        if(over) text = over;
       return(
           <div>
                {text}
           </div>
       )
    }
}