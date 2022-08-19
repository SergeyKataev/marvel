import AppHeader from "../appHeader/AppHeader";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Component} from "react";
import {MainPage, ComicsPage} from '../pages';

const App = () => {

    return (
        <Router>
            <div className="app">
                {/*<DynamicGreetings color={'primary'}>*/}
                {/*    <h2>This weel was hard</h2>*/}
                {/*    <h2>Hello world!</h2>*/}
                {/*</DynamicGreetings>*/}
                {/*<Counter render={counter=> (*/}
                {/*    <Message counter={counter}/>*/}
                {/*)}/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>

    )


}

const DynamicGreetings = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
}

const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(
            ({counter}) => ({
                counter: counter + 1
            })
        )
    }

    render() {
        return (
            <>
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}
                >
                    Click me
                </button>
                {/*<Message counter={this.state.counter}/>*/}
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

export default App;