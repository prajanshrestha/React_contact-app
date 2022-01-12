import React, { Component } from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="m-4">
        <h2>Add contact</h2>
        <form>
          <div>
            <label>Name</label><br />
            <input type="text" name="name" placeholder="Name" />
          </div>
          <hr />
          <div>
            <label>Email</label><br />
            <input type="text" name="email" placeholder="Email" />
          </div>
        </form>
        <hr />
        <button className="btn btn-info">Add</button>
        <br /><br />
        <hr />
        <hr />
      </div>
    );
  }
}

export default AddContact;
