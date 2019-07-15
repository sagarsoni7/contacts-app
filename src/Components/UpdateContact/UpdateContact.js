import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import classes from "./UpdateContact.module.css";

class UpdateContact extends React.Component{

    state={
        userFullName:"",
        userCity:"",
        userMobile:"",
        userPhone:"",
        userEmail:"",
        userWebsite:"",
        result:[]
    }

  

    cancelUpdatingContact=()=>{
       
        this.props.history.push(`/`)
    }; 

    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    
    handleSubmit=event=>{

        //preventing default action
        event.preventDefault();

        //mapping local state to a constant
        const MyContact={
            userFullName: this.state.userFullName,
            userCity:this.state.userCity,
            userMobile:this.state.userMobile,
            userPhone:this.state.userPhone,
            userEmail:this.state.userEmail,
            userWebsite:this.state.userWebsite
        };

        //mapping that constant to another constant to destruct it
       

        //sending request to server to POST
        axios.put(`https://my-contacts-app-f655e.firebaseio.com/contacts/${this.props.match.params.ContactID}.json`, {MyContact})
        .then(()=>{
           alert("Successfully updated the contact")
        })
        .catch(()=>{
            alert("Failed to add contact")
        })
        .finally(()=>{
            this.props.history.push(`/`)
        })
        

  
    }


    render(){
        
        if(this.props.active_nav!=="updateContact"){
            this.props.myFunction("updateContact");
        }
        let UpdateContactPrompt=(
            <div>
            <h2>Opps! You have not selected any contact.</h2>
            <p>Please go to Contact List and top on UPDATE icon next to contact you wish to update.</p>
            </div>
        )
        if(this.props.match.params.ContactID){
            UpdateContactPrompt=(
                <div>
                <p>Fill in the new details to update contact:</p>
               <form onSubmit={this.handleSubmit} className={classes.MyForm}>
              <div>
              <label>Full Name</label>
              <input type="text" name="userFullName" value={this.state.userFullName} onChange={this.handleChange} />
              </div>
              <div>
              <label>City</label>
              <input type="text" name="userCity" value={this.state.userCity} onChange={this.handleChange} />
              </div>
              <div>
              <label>Mobile</label>
              <input type="text" name="userMobile" value={this.state.userMobile} onChange={this.handleChange} />
              </div>
              <div>
              <label>Phone</label>
              <input type="text" name="userPhone" value={this.state.userPhone} onChange={this.handleChange} />
              </div>
              <div>
              <label>Email</label>
              <input type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} />
              </div>
              <div>
              <label>Website</label>
              <input type="text" name="userWebsite" value={this.state.userWebsite} onChange={this.handleChange} />
              </div>
              <div>
              <button type="submit">Update Contact</button>
              <button onClick={this.cancelUpdatingContact}>Cancel</button>
              </div>
              </form>    
                </div>
            );

            
           
            if(typeof this.state.result[0]=="undefined"){
                axios.get(`https://my-contacts-app-f655e.firebaseio.com/contacts/${this.props.match.params.ContactID}.json`)
            .then(res=>{
                let contacts=res.data;
               
                let result=Object.keys(contacts).map(key=>[key, contacts[key]]);
                
                this.setState({result});
               
            })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(()=>{
               this.setState((prevState)=>{
                   return {
                    userFullName:prevState.result[0][1].userFullName,
                    userCity:prevState.result[0][1].userCity,
                    userMobile:prevState.result[0][1].userMobile,
                    userPhone:prevState.result[0][1].userPhone,
                    userEmail:prevState.result[0][1].userEmail,
                    userWebsite:prevState.result[0][1].userWebsite
                   }
               });
              }); 
            }
        }
        return(
              <div>
              {UpdateContactPrompt}         
              </div>
              );
    }
}

const mapStateToProps=state=>state;

const stateUpdate=(currentPage)=>({
    type: "CHANGE_STATE",
    payload: currentPage
});

const mapDispatchToProps=dispatch=>({
    myFunction: (currentPage)=>dispatch(stateUpdate(currentPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);