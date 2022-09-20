import { useEffect, useState } from "react";
import { API_ROOT } from "../utils/constants";
import { fetchData } from "../utils/fetchData";

import AddContact from "./AddContact/AddContact";
import ContactList from "./ContactList/ContactList";

function App() {
  //all the required states..
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({ name: " ", email: " ", phone: " " });
  const [updatedformData, setUpdatedFormData] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });
  const [editMode, setEditMode] = useState(false);

  const [loading, setLoading] = useState(true);

  const [collapse, setCollapse] = useState(false);
  //useEffect-hook will called after every render or when state changes
  useEffect(() => {
    //getting the contacts data-----GET REQUEST---------------------------------
    const fetchUser = async () => {
      const response = await fetch(API_ROOT);
      const data = await response.json();
      // console.log(data);
      setUser(data);
      setLoading(false);
      console.log(user);
    };
    fetchUser();
  }, []);

  //handling input-changes for form
  const handleChange = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    if (id === "name") {
      setForm((prevState) => {
        return { ...prevState, name: e.target.value };
      });
    } else if (id === "email") {
      setForm((prevState) => {
        return {
          ...prevState,
          email: e.target.value,
        };
      });
    } else {
      setForm((prevState) => {
        return {
          ...prevState,
          phone: e.target.value,
        };
      });
    }
    console.log(form);
  };

  //ALL OTHER FETCH RELATED LOGIC IS WRITTEN IN ANOTHER FILE....fetch.js

  //Adding a new contact-----POST REQUEST---------------------------------

  const handleAddContact = (e) => {
    e.preventDefault();
    fetchData.addUser(form);
  };

  //updating the previous input values , i used a new updatedForm-state
  const handleChangeContact = (e) => {
    // console.log(e.target.value);
    const id = e.target.id;
    console.log(id);
    if (id === "name") {
      setUpdatedFormData((prevState) => {
        return { ...prevState, name: e.target.value };
      });
    } else if (id === "email") {
      setUpdatedFormData((prevState) => {
        return { ...prevState, email: e.target.value };
      });
    } else {
      setUpdatedFormData((prevState) => {
        return { ...prevState, phone: e.target.value };
      });
    }
    // console.log(updatedformData);
  };

  //for editing the contact below is the logic
  const handleEditContact = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    let users = user;

    //adding a new property to user--that has to be edited..
    //based on this property...a input will be shown ..
    //using which prev info can be edited.......
    users[id].edit = !editMode;
    setUser(users);
    console.log(user);
    setEditMode(!editMode);
  };

  //Updating a Existing Contact-----PUT REQUEST---------------------------------
  const handleUpdateContact = (e) => {
    const id = e.target.id;
    console.log(id);
    let users = user;
    users[id].edit = !editMode;

    // console.log(updatedformData);

    //after editing the old info..and ....setting it to updatedFormData ...
    //then passing the object to the below function to fetch the data(using PUT-req)
    fetchData.updateContact(updatedformData, user[id].id);
    setUser(users);
    setEditMode(!editMode);
  };

  //Deleting a contact-----DELETE REQUEST---------------------------------
  const handleDeleteContact = (id) => {
    // console.log(id);
    fetchData.deleteContact(id);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="App">
      <AddContact
        handleChange={handleChange}
        handleAddContact={handleAddContact}
        collapse={collapse}
        handleCollapse={handleCollapse}
      />
      <ContactList
        user={user}
        loading={loading}
        handleEditContact={handleEditContact}
        handleUpdateContact={handleUpdateContact}
        handleDeleteContact={handleDeleteContact}
        handleChangeContact={handleChangeContact}
        editMode={editMode}
      />
    </div>
  );
}

export default App;
