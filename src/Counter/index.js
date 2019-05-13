import React, {Component} from 'react';
import './counter.scss';
import Delta from "./Delta";
import Delta2 from "./Delta2";

class Counter extends Component {
    state = {
        value : 0
    };

    // constructor(props){
    //     super(props);
    //     this.myFunc = this.myFunc.bind(this);
    // }
    //
    // myFunc(){
    //     this.....
    // }
    //

    render() {
        let {value, delta, delta2} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <Delta delta={delta} handleChange = {this.handleChange} />
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMult}>*</button>
                <button onClick={this.handleDiv}>/</button>
                <Delta2 delta2={delta2} handleChange = {this.handleChanges}/>
            </div>
        );
    }

    handleChange = event => {
        this.setState({
            delta: parseInt(event.target.value)
        });
    }

    handleChanges = event => {
        this.setState({
            delta2: parseInt(event.target.value)
        });
    }

    handlePlus = () => {
        this.setState({
            value : this.state.delta + this.state.delta2
        });
    }

    handleMult = () => {
        this.setState({
            value : this.state.delta * this.state.delta2
        });
    }


    handleDiv = () => {
        this.setState({
            value : this.state.delta / this.state.delta2
        });
    }


    handleMinus = () => {
        this.setState({
            value : this.state.delta - this.state.delta2
        });
    }
}

export default Counter;