import "./App.css";
import AddContact from "./addContact";
import ContactList from "./contactList";
import Header from "./header";
import React from "react";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Prajan",
      email: "prajanshrestha10@gmail.com",
    },
    {
      id: 2,
      name: "Ram",
      email: "ram@gamil.com",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </React.Fragment>
  );
}

export default App;
