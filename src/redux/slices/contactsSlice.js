import { createSlice } from "@reduxjs/toolkit";
const contactsSlice = createSlice({
    
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState: { contactsArray: []},
    // Об'єкт редюсерів
    reducers: {
      addContact(state, action) {
        if (state.contactsArray.length > 0) {
            return state.contactsArray.find(contact => contact.name.toUpperCase() === action.payload.name.toUpperCase()) 
            ? alert(`${action.payload.name} is already in contacts`) 
            : {contactsArray: [...state.contactsArray, action.payload]}
        }
        else {
            return {contactsArray: [...state.contactsArray, action.payload]}
        }
        
      },
      deleteContact(state, action) {
        const newObj = state.contactsArray.filter(contact => contact.id !== action.payload)
        return {contactsArray: [...newObj]}
      },
    },
  });
  export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
