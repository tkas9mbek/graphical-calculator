import React from 'react';

import './App.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result : 0,
            first: 0,
            second: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        Calculator.copy = Calculator.copy.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    static copy() {
        const copyText = document.getElementById("result");
        copyText.select();
        document.execCommand("copy");
    }

    render() {
        return (
            <div className="card mid-cos" >
                <div className="row">
                    <div className="col-md-12 txt-into-cos" >
                        <a href="https://github.com/tkas9mbek/graphical-counter" style={{'color': 'black'}}> Calculator by Kasymbek Tashbaev</a>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="input-group">
                        <input type="number"
                               className="form-control"
                               name="first"
                               id="first"
                               value={this.state.first}
                               onChange={this.handleInputChange}
                        />
                        <input type="number"
                               className="form-control"
                               name="second"
                               id="second"
                               value={this.state.second}
                               onChange={this.handleInputChange}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 ">
                        <br />
                        <button className="btn-primary btn btn-calc-cos"
                                onClick={() => this.setState({ result: parseFloat(this.state.first) + parseFloat(this.state.second)})}> + </button>
                        <button className="btn-primary btn btn-calc-cos"
                                onClick={() => this.setState({ result: parseFloat(this.state.first) - parseFloat(this.state.second)})}> - </button>
                        <button className="btn-primary btn btn-calc-cos"
                                onClick={() => this.setState({ result: parseFloat(this.state.first) / parseFloat(this.state.second)})}> / </button>
                        <button className="btn-primary btn btn-calc-cos"
                                onClick={() => this.setState({ result: parseFloat(this.state.first) * parseFloat(this.state.second)})}> * </button>
                    </div>
                </div>

                <br />

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Result</span>
                    </div>

                    <input type="text" className="form-control" value={this.state.result} id="result" readOnly/>

                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" style={{'margin': '0px 3px 0px 3px'}}
                                onClick={Calculator.copy}>Copy to Clipboard</button>
                    </div>

                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"
                                onClick={() => this.setState({ first: this.state.result})}>Use result</button>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-12" >
                        <button className="btn-danger btn" style={{'border-radius': '8px', 'width':'43%', 'float': 'right'}}
                                onClick={() => this.setState({ first: 0, second: 0, result: 0})}> Reset </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="pull-right">
                            <a href="/" style={{'color':'blue'}}>Go to Counter</a>
                        </div>
                    </div>
                </div>

                <div className="clearfix"/>

            </div>
        )
    }

}

export default Calculator;
