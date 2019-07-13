import React from "react";
import classes from "./VCard.module.css";
import toolIcon from "../../../Assets/tools.png";
import deleteIcon from "../../../Assets/delete.png";



const VCard = () => (
    <div className={classes.outerone}>
        <div className={classes.avatar}>
            <img src="https://www.w3schools.com/howto/img_avatar.png"/>
        </div>
        <div>
            <div>
                <strong>Name:</strong>Sagar Soni</div>
            <div>
                <strong>City:</strong>New Delhi</div>
        </div>
        <div>
            <div>
                <strong>Mobile:</strong>9996166717</div>
            <div>
                <strong>Phone:</strong>1666-232417</div>
        </div>
        <div>
            <div>
                <strong>Email:</strong>sagar.soni@zoho.com</div>
            <div>
                <strong>Website:</strong>www.codeparadox.in</div>
        </div>
        <div>
            <div className={classes.myIcon}>
                <a href="#"><img alt="Update Contact" src={toolIcon}/></a>
            </div>
            <div className={classes.myIcon}>
                <a href="#"><img alt="Delete Contact" src={deleteIcon}/></a>
            </div>
        </div>
    </div>
);

export default VCard;