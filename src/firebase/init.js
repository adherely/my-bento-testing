import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
    apiKey: "AIzaSyA_Xf231urENB0pdwiFRAW3lrdsrcAG9Rs",
    authDomain: "my-bento-starter.firebaseapp.com",
    databaseURL: "https://my-bento-starter.firebaseio.com",
    projectId: "my-bento-starter",
    storageBucket: "",
    messagingSenderId: "868412378509",
    appId: "1:868412378509:web:1852762919320c54"
}

firebase.initializeApp(config)
