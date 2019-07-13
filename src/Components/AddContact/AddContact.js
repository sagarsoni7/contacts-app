import React from "react";
import {connect} from "react-redux";

class AddContact extends React.Component{
    render(){
        console.log(this.props);
        if(this.props.active_nav!=="addContact"){
            this.props.myFunction("addContact");
        }
        return(
              <div>
              <h1>Let us add new contact</h1>              
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