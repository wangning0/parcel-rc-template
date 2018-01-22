import React from "react";
import ReactDOM from 'react-dom';
import Demo from '../src/';


class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Demo />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));