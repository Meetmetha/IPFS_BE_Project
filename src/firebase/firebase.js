import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyCQPEw_y03UjIupDNlMJvantU0CxCSc2Go",
  authDomain: "ipfsmiteshmetha.firebaseapp.com",
  projectId: "ipfsmiteshmetha",
  storageBucket: "ipfsmiteshmetha.appspot.com",
  messagingSenderId: "567247092795",
  appId: "1:567247092795:web:1d8cf381967a78bf4ab01e"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.firestore();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
