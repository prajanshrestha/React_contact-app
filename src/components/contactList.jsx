import React, { Component } from "react";
import ContactCard from "./contactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
