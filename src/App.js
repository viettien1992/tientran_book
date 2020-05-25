import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookAll from './components/BookAll';
import Book from './components/Book';
class App extends React.Component {
    render() {
        return (
            <Router>
                    <Route exact path="/book" component={BookAll}/>
                    <Route path='/book/:id'  component={Book} />
            </Router>
        );
    }
}
export default App;
