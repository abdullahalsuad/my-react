class Context {
    constructor(value){
        this.value = value;
    }
    //provider
    Provider = ({children,value}) => {
        this.value = value;
        return children
    }

    //consumer
    Consumer = ({children}) => children(this.value)

}

function createContextr(value = null){
        const context = new Context(value)
        return {
            Provider: context.Provider,
            Consumer: context.Consumer
        }
}

export default createContextr;