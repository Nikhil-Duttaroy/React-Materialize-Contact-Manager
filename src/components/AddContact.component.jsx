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
    <div className='row'>
      <div className='card col s6 offset-s3' style={{ padding: "1.5rem" }}>
        <form action='' className='center-align' onSubmit={add}>
          <h5>Add Contact</h5>
          <div className='row'>
            <div className='input-field col s12 '>
              <label htmlFor='Name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='input-field col s12'>
              <label htmlFor='email'>Email</label>
              <input
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
              <label htmlFor='contact'>Contact No</label>
              <input
                type='tel'
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
