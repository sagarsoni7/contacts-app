import React from "react";
import classes from "./VCard.module.css";
import toolIcon from "../../../Assets/tools.png";
import deleteIcon from "../../../Assets/delete.png";



const VCard = (props) => (
    <div className={classes.outerone}>
        <div className={classes.avatar}>
            <img alt="user" src="https://www.w3schools.com/howto/img_avatar.png"/>
        </div>
        <div>
            <div>
                <strong>Name:</strong>{props.userFullName}</div>
            <div>
                <strong>City:</strong>{props.userCity}</div>
        </div>
        <div>
            <div>
                <strong>Mobile:</strong>{props.userMobile}</div>
            <div>
                <strong>Phone:</strong>{props.userPhone}</div>
        </div>
        <div>
            <div>
                <strong>Email:</strong>{props.userEmail}</div>
            <div>
                <strong>Website:</strong>{props.userWebsite}</div>
        </div>
        <div>
            <div className={classes.myIcon}>
                <a href={props.UpdateContactURL}><img alt="Update Contact" src={toolIcon}/></a>
            </div>
            <div className={classes.myIcon}>
                <a href={props.DeleteContactURL}><img alt="Delete Contact" src={deleteIcon}/></a>
            </div>
        </div>
    </div>
);

export default VCard;