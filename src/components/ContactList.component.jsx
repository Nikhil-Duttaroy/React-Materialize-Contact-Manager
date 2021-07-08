import React ,{useRef} from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard.component";

const ContactList = (props) => {
  const { contacts } = props;
  const input=useRef("")
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm =() => {
    props.searchKeyword(input.current.value)
  }

  return (
    <div className='container #0F7173' style={{ marginTop: "2rem" }}>
      <div
        className='container'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5 className='left-align white-text'>Contact List</h5>
        <Link to='/add'>
          <button
            className='btn waves-effect waves-light'
            style={{ marginTop: "0.75rem" }}
          >
            Add Contact
          </button>
        </Link>
      </div>
      <div className='container'>
        <input
          ref={input}
          type='text'
          placeholder='Search..'
          name='search'
          style={{color:"white"}}
          value={props.term}
          onChange = { getSearchTerm}
        />
      </div>
      <table className='highlight centered '>
        <thead>
          <tr>
            <th className='white-text'>Name</th>
            <th className='white-text'>Email</th>
            <th className='white-text'>Contact</th>
            <th className='white-text'>Delete</th>
          </tr>
        </thead>
        {renderContactList.length > 0 ? renderContactList : (<h4 style={{color:"red" , textAlign:"center"}}> "No Contacts Available" </h4>)}
      </table>
    </div>
  );
};

export default ContactList;
