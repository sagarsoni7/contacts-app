import React from 'react';
import classes from './App.module.css';
import {Route, Link} from "react-router-dom";
import {ContactsList} from "./Components/ContactsList";
import {AddContact} from "./Components/AddContact";
import {DeleteContacts} from "./Components/DeleteContacts";
import {connect} from "react-redux";

class App extends React.Component{
    render(){
        // console.log(this.props)
        return(          
                <div>
                    <header className={classes.logo}>
                        <h1>My Contacts App</h1>
                        <nav>
                        <ul>
                        <li className={this.props.state.active_nav==="home"?classes.activemenu:null}><Link to="/">List Contacts</Link></li>
                        <li className={this.props.state.active_nav==="addContact"?classes.activemenu:null}><Link to="/add-contact">Add New Contact</Link></li>
                        <li className={this.props.state.active_nav==="deleteContact"?classes.activemenu:null}><Link to="/delete-contacts">Delete Contacts</Link></li>
                        </ul>
                         </nav>
                    </header>
                    <Route exact path="/" component={ContactsList}/>
                    <Route exact path="/add-contact" component={AddContact}/>
                    <Route exact path="/delete-contacts" component={DeleteContacts}/>
                </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        state
    };
}

export default connect(mapStateToProps)(App);
