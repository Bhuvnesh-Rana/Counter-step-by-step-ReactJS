import { Component } from "react";
import './counter.css'


class Counter extends Component{
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
                 Hellooo.   
                <br />                                     
                <button onClick={this.increment}>+1</button>     {/*//call local mthd with this.  */}
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }
    increment(){
        console.log('increment')
        this.setState({                     //set the state in the mthd. 
            counter : this.state.counter + 1
        })
    }
}
export default Counter