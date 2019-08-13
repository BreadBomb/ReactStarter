import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestContainer from "./container/TestContainer";
import {Provider} from "react-redux";
import store from "./createStore";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <TestContainer/>
            </div>
        </Provider>
    );
}

export default App;
