import React from 'react';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0,
            value: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }


    render() {
        return (
            <div className="card mid-cos">
                <div className="row">
                    <div className="col-md-12 txt-into-cos" >
                        <a href="https://github.com/tkas9mbek" style={{'color': 'black'}}> Counter by Kasymbek Tashbaev</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="txt-cos">{this.state.count}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="center-block-cos">
                        <div className="form-group">
                            <label>Enter amount to increment/decrement</label>
                            <input type="number"
                                   name="value"
                                   className="form-control"
                                   value={this.state.value}
                                   onChange={this.handleInputChange}
                                   min="1"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 btn-group form-group">
                        <br />
                        <button className="btn-primary btn " onClick={() => this.setState({ count: this.state.count + parseFloat(this.state.value)})}> Increment </button>
                        <button className="btn-primary btn " onClick={() => this.setState({ count: this.state.count - parseFloat(this.state.value)})}> Decrement </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" >
                        <button className="btn-danger btn" style={{'border-radius': '8px', 'width':'43%', 'float': 'right'}} onClick={() => this.setState({ count: 0, value: 1})}> Reset </button>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;
