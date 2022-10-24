import React from "react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div className="item">
      
      <div className="content">
        <Link
          
        >
          <div className="header">nombre</div>
          <div>email</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
      ></i>
      <Link>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
