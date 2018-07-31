import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCR1x2fhI8w32yz_74KeAQjnvknhZfsqzs",
  authDomain: "contactform-d9287.firebaseapp.com",
  databaseURL: "https://contactform-d9287.firebaseio.com",
  projectId: "contactform-d9287",
  storageBucket: "contactform-d9287.appspot.com",
  messagingSenderId: "769566872950"
};

const firebaseDB = firebase.initializeApp(config);
export default firebaseDB;