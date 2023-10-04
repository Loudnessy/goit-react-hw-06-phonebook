import { addContact } from "redux/slices/contactsSlice";
import { nanoid } from "nanoid";
export const submit = async (evt, dispatch) => {
    
    const formReset = () => {
        evt.target.name.value = ""
        evt.target.querySelector('input[type="tel"]').value = ""
    }
    await dispatch(addContact({id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}))
// setContacts(prevContacts => {
//         const newObj = {id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
//         return [...prevContacts, newObj]
//        }) 
   await formReset()
} 