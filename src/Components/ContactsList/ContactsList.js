import React from "react";
import {connect} from "react-redux";
import {VCard} from "./VCard";
import classes from "./ContactsList.module.css";
import axios from "axios";

class ContactsList extends React.Component {

    state = {
        result: []
      }

    componentDidMount() {
        axios.get(`https://my-contacts-app-f655e.firebaseio.com/contacts.json`)
        .then(res=>{
            let contacts=res.data;
           
            let result=Object.keys(contacts).map(key=>[key, contacts[key]]);
            console.log(result);
            this.setState({result});
        })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        
      }


    render() {
       
        if (this.props.active_nav !== "home") {
            this
                .props
                .myFunction("home");
        }
      
        return (
            <div>
                <h1>All Contacts:</h1>
                <div className={classes.outermost}>
                {this.state.result.map((contact,index)=> (
                    <VCard
                        key={index}
                        userFullName={contact[1].MyContact.userFullName}
                        userCity={contact[1].MyContact.userCity}
                        userMobile={contact[1].MyContact.userMobile}
                        userPhone={contact[1].MyContact.userPhone}
                        userEmail={contact[1].MyContact.userEmail}
                        userWebsite={contact[1].MyContact.userWebsite}
                        UpdateContactURL="#"
                        DeleteContactURL="#"
                        />
                ))}
                    
                           
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const stateUpdate = (currentPage) => ({type: "CHANGE_STATE", payload: currentPage});

const mapDispatchToProps = dispatch => ({
    myFunction: (currentPage) => dispatch(stateUpdate(currentPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);