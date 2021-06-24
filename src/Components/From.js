import React from 'react'

export default class Form extends React.Component{
    state={
        title:'heloo..',
        text:'hello',
        laibrary:'React',
        isAwesome:true
    }
    handleChange = (e) =>{
        if(e.target.type === 'text'){
         this.setState({
             title:e.target.value,
         })
        }else if(e.target.type === 'textarea'){
         this.setState({
             text:e.target.value,
         })
        }else if(e.target.type === 'select-one'){
            this.setState({
                laibrary:e.target.value,
            })
        }else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome:e.target.checked,
            })
        }

    
    }
    submitHandler = (e) =>{
          e.preventDefault();                 
    }
    render(){
        const{title,text,laibrary,isAwesome} = this.state
       return(
           <div>
               <form onSubmit={this.submitHandler}>
                   <input  
                        type="text" 
                        placeholder="type..hello" 
                        value={title} 
                        onChange={this.handleChange}
                   /> 
                   <br/>
                   <br/>
                   <textarea 
                        name="text" 
                        value={text}
                        onChange={this.handleChange}
                        /><br/><br/>
                        <select value={laibrary}  onChange={this.handleChange}>
                            <option value="react" >react</option>
                            <option value="html" >html</option>
                        </select>
                        <br/>
                        <br/>
                        <input 
                            type="checkbox" 
                            onChange={this.handleChange} 
                            checked={isAwesome} />
                        <br/><br/>
                        <input type="submit" value="submit"/>    
               </form>
           </div>
       )
    }
}