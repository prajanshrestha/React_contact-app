import React, { Component } from "react";

const contactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <div>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <i></i>
      </div>
    );
  });

  return <div className="m-4">Contact list</div>;
};

export default contactList;
