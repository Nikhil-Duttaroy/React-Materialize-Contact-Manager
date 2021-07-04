import React from 'react'
import {Link} from 'react-router-dom'

import ContactCard from './ContactCard.component';

const ContactList = (props) => {
    const {contacts} = props;
    const deleteContactHandler = (id) => {
      props.getContactId(id);
    };

    const renderContactList = contacts.map(contact => {
        return (
          <ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
          />
        );
    })

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
        <table className='highlight centered '>
          <thead>
            <tr>
              <th className='white-text'>Name</th>
              <th className='white-text'>Email</th>
              <th className='white-text'>Contact</th>
              <th className='white-text'>Delete</th>
            </tr>
          </thead>
          {renderContactList}
        </table>
      </div>
    );}

export default ContactList
