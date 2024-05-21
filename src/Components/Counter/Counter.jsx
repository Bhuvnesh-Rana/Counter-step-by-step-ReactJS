import { Component } from "react";
import './counter.css'
import { render } from "@testing-library/react";

class Counter extends Component{
    render(){
        return(
            <div>
                <CounterButton by={5}></CounterButton>      {/* //Adding property this will have this prop now. */}
                <CounterButton by={10}></CounterButton>     {/* int value in {} otherwise treated as a string.*/}
                <CounterButton by={15}></CounterButton>
            </div>
        );
    }
}

class CounterButton extends Component{
    //define initial state in constructor. and update state in theh mthd.
    constructor(){
        super()
        this.state=({
            counter : 0
        })
        this.increment = this.increment.bind(this)          //bind mthd with const. 
    }

    render(){
        return(
            <div>                                    
                <button onClick={this.increment} style={{borderRadius:"20px"}}>+{this.props.by}</button>     {/*//call local mthd with this.  */}
                <span className="count" >{this.state.counter}</span>
            </div>
        );
    }

    increment(){
        console.log('increment')
        this.setState({                     //set the state in the mthd. 
            counter : this.state.counter + this.props.by
        })
    }
}


// Counter.defaultProps ={          //can add default value to by if you don't want to specify in app.js<Counter></counter>
//     by:1                 
// }
//cann alse add constraint to by tha what type of data is allowed int or string etc.. see vid Counter.propType={by:PropType.number}

export default Counter