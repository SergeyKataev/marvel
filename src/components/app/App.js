import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import 'bootstrap/dist/css/bootstrap.css';

import decoration from '../../resources/img/vision.png';
import React, {Component} from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class App extends Component {

    state = {
        selectedChad: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChad: id
        });
    }

    render() {
        return (
            <div className="app">
                <DynamicGreetings color={'primary'}>
                    <h2>This weel was hard</h2>
                    <h2>Hello world!</h2>
                </DynamicGreetings>
                <Counter render={counter=> (
                    <Message counter={counter}/>
                )}/>
                <br/>
                <br/>
                <br/>
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected}/>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChad}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }

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