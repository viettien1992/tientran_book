import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookAll from './components/BookAll';
import Book from './components/Book';
import home from './components/Home';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
class App extends React.Component {
    render() {
        return (
            <Router>
                <PrivateRoute exact path="/" component={BookAll} />
                <PrivateRoute exact path="/book" component={BookAll} />
                <PrivateRoute exact path='/book/:id' component={Book} />
                <PrivateRoute exact path="/home" component={home} />
                <PrivateRoute exact path="/book1/add" component={AddBook} />
                <PrivateRoute exact path="/book1/edit/:id" component={EditBook} />
                <Route exact path="/login" component={Login} />
            </Router>
        );
    }
}

export default App;
