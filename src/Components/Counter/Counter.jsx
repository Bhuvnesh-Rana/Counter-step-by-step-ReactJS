import { Component } from "react";
import './counter.css'


class Counter extends Component{
    render(){
        return(
            <div>
                Hellooo.
                <br />
                <button>+1</button>
                <span className="count">0</span>
            </div>
        );
    }
}
export default Counter