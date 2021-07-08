import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header.component";
import AddContact from "./components/AddContact.component";
import ContactList from "./components/ContactList.component";
import ContactDetails from "./components/ContactDetails.component";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setfilteredContacts] = useState([]);


 const addContactHandler = (contact) => {
   console.log(contact);
   setContacts([...contacts, { id: uuid(), ...contact }]);
 };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setfilteredContacts(newList)
    }
    else
    {
      setfilteredContacts(contacts);
    }
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />{" "}
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : filteredContacts}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path='/add'
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route to='/contact/:id' component={ContactDetails}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
