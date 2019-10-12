import * as firebase from 'firebase';
import '../firebase-config';


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();

