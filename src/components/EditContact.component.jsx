import React, { useState } from "react";

const EditContact = (props) => {
  
  const [values, setValues] = useState({
    id: props.location.state.detail.id,
    name: props.location.state.detail.name,
    email: props.location.state.detail.email,
    contact: props.location.state.detail.contact,
  });

const { id, name, email, contact } = values;
  

  const update = (e) => {
    
    e.preventDefault();
    if (name === "" || email === "" || contact === "") {
      alert("All The Fields Are Mandatory");
      return;
    }
    props.updateContactHandler(values);
    setValues({ ...values, name: "", email: "", contact: "" });
  // console.log(props.history);
    
    props.history.push("/")
  };
  return (
    <div className='row'>
      <div className='card col s6 offset-s3' style={{ padding: "1.5rem" }}>
        <form action='' className='center-align' onSubmit={update}>
          <h5>Edit Contact</h5>
          <div className='row'>
            <div className='input-field col s12 '>
              <label className='active'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='input-field col s12'>
              <label className='active'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className='input-field col s12'>
              <label className='active'>Contact No</label>
              <input
                type='tel'
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
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
