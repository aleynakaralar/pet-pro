
import firebase from "../auth/firebase";
import { getDatabase, push, ref, set } from "firebase/database";


export const AddUser = (info) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, 'ads/');
    const newUserRef = push(userRef)
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        information:info.info,
    })
}



