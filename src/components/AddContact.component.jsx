import React, { useState } from "react";

const AddContact = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const { name, email, contact } = values;

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || contact === "") {
      alert("All The Fields Are Mandatory");
      return;
    }
    props.addContactHandler(values);
    setValues({ ...values, name: "", email: "", contact: "" });
  // console.log(props.history);
    
    props.history.push("/")
  };
  return (
    <div className='row' style={{ marginTop: "2rem" }}>
      <div
        className='card col s6 offset-s3'
        style={{ padding: "1.5rem", background: "rgb(212,173,173)",
background: "linear-gradient(0deg, rgba(212,173,173,1) 0%, rgba(238,110,115,1) 100%)"}}
      >
        <form action='' className='center-align' onSubmit={add}>
          <h5>Add Contact</h5>
          <div className='row'>
            <div
              className='input-field col s12'
              style={{ color: "white", fontWeight: "400" }}
            >
              <label htmlFor='Name' style={{ color: "black" }}>
                Name
              </label>
              <input
                style={{ color: "black", fontWeight: "400" }}
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='input-field col s12'>
              <label
                htmlFor='email'
                style={{ color: "black", fontWeight: "400" }}
              >
                Email
              </label>
              <input
                style={{ color: "black", fontWeight: "400" }}
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className='input-field col s12'>
              <label
                htmlFor='contact'
                style={{ color: "black", fontWeight: "400" }}
              >
                Contact No
              </label>
              <input
                style={{ color: "black", fontWeight: "400" }}
                type='tel'
                pattern='[0-9]{10}'
                name='contact'
                id='contact'
                value={contact}
                onChange={(e) =>
                  setValues({ ...values, contact: e.target.value })
                }
              />
            </div>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
