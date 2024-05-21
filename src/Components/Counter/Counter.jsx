import { Component } from "react";
import './counter.css'


class Counter extends Component{
    render(){
        return(
            <div>
                Hellooo.
                <br />
                <button onClick={this.increment}>+1</button>
                <span className="count">0</span>
            </div>
        );
    }
    increment(){
        console.log('increment')
    }
}
export default Counter