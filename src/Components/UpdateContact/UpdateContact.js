import React from "react";
import {connect} from "react-redux";

class UpdateContact extends React.Component{
    render(){
        console.log(this.props);
        if(this.props.active_nav!=="updateContact"){
            this.props.myFunction("updateContact");
        }
        return(
              <div>
              <h1>Select contact to update</h1>              
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