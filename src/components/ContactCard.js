import React from "react";


 const  ContactCard = (props) => {
    const { id,name, surname, email, phonenumber}= props.contact;
  return (
        <div className="item">
        <div className="content">
          <div className="header">
          {name}</div>
          <div>{surname}</div> 
          <div>{email}</div>
          <div>{phonenumber}</div>
        </div>
        <i
        className="trash alternate outline icon"
        style={{color:'red', fontsize: '15px'}}
        onClick={()=> props.clickHander(id)}
        ></i>
      </div>
  )
}

export default ContactCard;