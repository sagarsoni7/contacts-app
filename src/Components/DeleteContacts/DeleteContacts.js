import React from "react";
import {connect} from "react-redux";

class DeleteContacts extends React.Component{
    render(){
        console.log(this.props);
        if(this.props.active_nav!=="deleteContact"){
            this.props.myFunction("deleteContact");
        }
        return(
              <div>
              <h1>Select contacts to delete</h1>              
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