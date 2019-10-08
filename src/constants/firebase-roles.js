import * as firebase from 'firebase';
import '../firebase-config';


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

