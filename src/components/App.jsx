import React from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { StyledDiv } from "App.styled";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { submit } from "./ContactForm/submit";
import { addContact, addLocalStorageContacts, deleteContact } from "redux/slices/contactsSlice";
import { changeFilter } from "redux/slices/filterSlice";
import { useSelector } from "react-redux";
export const App = () => {
// const [contacts, setContacts] = useState([])
// const [filter, setFilter] = useState('')
const dispatch = useDispatch();

const onSubmitContact = evt => {
    evt.preventDefault()
    submit(evt, dispatch)
}
const onChangeInput = evt => {
    dispatch(changeFilter(evt.target.value))
}
const contacts = useSelector(state => state.contacts.contactsArray)
const filter = useSelector(state => state.filter)
console.log(contacts);
const filterByName = () => {
     return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))      
}
const deletingContact = evt => {
    dispatch(deleteContact(evt.target.id))
    // localStorage.setItem("contacts", JSON.stringify(newObj));
}
    return <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={onSubmitContact}/>
        <h2>Contacts</h2>
        <Filter input={onChangeInput}/>
<ContactList contacts={contacts} filter={filter} filtering={filterByName} deleting={deletingContact}/>
    </StyledDiv>
};
