import React from "react";
import {connect} from "react-redux";
import classes from "./AddContact.module.css";
import axios from "axios";

class AddContact extends React.Component{
    state={};


    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit=event=>{

        //preventing default action
        event.preventDefault();

        //mapping local state to a constant
        const mycontact={
            contact: this.state
        };

        //mapping that constant to another constant to destruct it
        const MyContact=mycontact.contact;

        //sending request to server to POST
        axios.post("https://my-contacts-app-f655e.firebaseio.com/contacts.json", {MyContact})
        .then(res=>{
            console.log(res);
        })
        

  
    }



    render(){

        
       
        if(this.props.active_nav!=="addContact"){
            this.props.myFunction("addContact");
        }

        return(
              <div>
              <h1>Add New Contact:</h1>    
              <form onSubmit={this.handleSubmit} className={classes.MyForm}>
              <div>
              <label>Full Name</label>
              <input type="text" name="userFullName" onChange={this.handleChange} />
              </div>
              <div>
              <label>City</label>
              <input type="text" name="userCity" onChange={this.handleChange} />
              </div>
              <div>
              <label>Mobile</label>
              <input type="text" name="userMobile" onChange={this.handleChange} />
              </div>
              <div>
              <label>Phone</label>
              <input type="text" name="userPhone" onChange={this.handleChange} />
              </div>
              <div>
              <label>Email</label>
              <input type="text" name="userEmail" onChange={this.handleChange} />
              </div>
              <div>
              <label>Website</label>
              <input type="text" name="userWebsite" onChange={this.handleChange} />
              </div>
              <div>
              <button type="submit">Add Contact</button>
              </div>
              </form>          
              </div>
              );
    }
}


const mapStateToProps=state=>state;

const stateUpdate=(currentPage)=>({
    type: "CHANGE_STATE",
    payload: currentPage
})

const mapDispatchToProps=dispatch=>({
    myFunction: (currentPage)=>dispatch(stateUpdate(currentPage))
})

export default connect(mapStateToProps, mapDispatchToProps) (AddContact);