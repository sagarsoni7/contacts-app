import React from "react";
import {connect} from "react-redux";

class ContactsList extends React.Component{
    render(){
        console.log(this.props);
        if(this.props.active_nav!=="home"){
            this.props.myFunction("home");
        }
        return(
            <div>
            <h1>Here lies a list of contacts</h1>
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

export default connect(mapStateToProps, mapDispatchToProps) (ContactsList);