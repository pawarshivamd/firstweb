
import React, { useState } from "react";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const  handleChange = (e) => {
  //   e.preventDefault();
  //   console.log("Name: ", name);
  //   console.log("Email: ", email);
  //   console.log("Message: ", message);
  //   // Add your code to send the data to the server or an email service here
  // };
  const [user,setUser]= useState({name:'',email:'',number:''});
  const  handleChange =(key,value)=>{
    setUser((oldStateValue) => {
      return{ ...oldStateValue,[key]:value};
    });
  };
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={ handleChange}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => { handleChange('name',e.target.value);}}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => { handleChange('email',e.target.value);}}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={user.message}
            onChange={(e) => { handleChange('message',e.target.value);}}
          />
        </label>
        <br />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Contact
