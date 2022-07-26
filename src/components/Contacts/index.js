import {useState, useEffect} from 'react';
import List from './List';
import Form from './Form';
import  "./style.css"

function Contacts() {
  const [contacts,setContacts] = useState([
    {
      fullname: 'Sena',
      phone_number: "0208"
    },{
      fullname: 'Can',
      phone_number: "2012"
    },{
      fullname: 'İdil',
      phone_number: "2605"
    }
  ]);

  
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>CONTACTS</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts
