import React from "react";
import {connect} from "react-redux";
import {VCard} from "./VCard";
import classes from "./ContactsList.module.css";

class ContactsList extends React.Component {
    render() {
        console.log(this.props);
        if (this.props.active_nav !== "home") {
            this
                .props
                .myFunction("home");
        }
        return (
            <div>
                <h1>All Contacts:</h1>
                <div className={classes.outermost}>
                    <VCard/>
                  

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