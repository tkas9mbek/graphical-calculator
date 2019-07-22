import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Counter from './Counter';
import Calculator from './Calculator';
import { Route, BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>

        <Route exact path="/" render={props =>
            <div className="wrapper" style={{overflow: 'auto'}}>
                <Counter />
            </div>} />

        <Route exact path="/calculator" render={props =>
            <div className="wrapper" style={{overflow: 'auto'}}>
                <Calculator />
            </div>} />

    </BrowserRouter>,

    document.getElementById('root'));