import React from "react";
import {connect} from "react-redux";
import axios from "axios";

class DeleteContacts extends React.Component{

    deleteContact=()=>{
        axios.delete(`https://my-contacts-app-f655e.firebaseio.com/contacts/${this.props.match.params.ContactID}.json`)
          .then(()=> {
            alert("Contact Deleted Successfully");
          })
          .catch(()=>{
            alert("Error occured while deleting contact");
          })
          .finally(()=>{
            this.props.history.push(`/`)
          })
    }
    cancelDeletingContact=()=>{
       
        this.props.history.push(`/`)
    }



    render(){
        console.log(this.props);
        if(this.props.active_nav!=="deleteContact"){
            this.props.myFunction("deleteContact");
        }
        let DeleteContactPrompt=(
            <div>
            <h2>Opps! You have not selected any contact.</h2>
            <p>Please go to Contact List and top on DELETE icon next to contact you wish to delete.</p>
            </div>
        )
        if(this.props.match.params.ContactID){
            DeleteContactPrompt=(
                <div>
                <p>Are you sure you want to delete this contact?</p>
                <button onClick={this.deleteContact}>Yes</button>
                <button onClick={this.cancelDeletingContact}>No</button>
                </div>
            )
        }
        return(
              <div>
              {DeleteContactPrompt}         
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContacts);