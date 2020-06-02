import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import BookAll from './components/BookAll';
import Book from './components/Book';
import home from './components/Home';
import AddBook from './components/AddBook';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/book" component={BookAll}/>
                <Route exact path='/book/:id' component={Book}/>
                <Route exact path="/home" component={home}/>
                <Route exact path="/book1/add" component={AddBook}/>
            </Router>
        );
    }
}

export default App;
