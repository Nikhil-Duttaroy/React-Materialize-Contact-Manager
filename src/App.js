import  React  ,{useState , useEffect} from "react";
import {uuid} from 'uuidv4';
import { BrowserRouter ,Switch  ,Route} from "react-router-dom";

import Header from "./components/Header.component";
import AddContact from "./components/AddContact.component";
import ContactList from "./components/ContactList.component";
import ContactDetails from './components/ContactDetails.component';


function App() {
  const LOCAL_STORAGE_KEY='contacts'
  const [contacts,setContacts] = useState([])
  
  const addContactHandler=(contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts]);

  return (
    <>
      <Header />{" "}
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            render = { (props => (
            <ContactList
            {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />))}
          />
          <Route
            path='/add'
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route to='/contact/:id' component={ContactDetails}></Route>

        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
