import app from 'firebase/app';
import 'firebase/firestore';
import apiKey from './Constants'

const firebaseConfig = {
  apiKey: {apiKey},
  authDomain: 'proyecto-moms.firebaseapp.com',
  databaseURL: 'https://proyecto-moms.firebaseio.com',
  projectId: 'proyecto-moms',
  storageBucket: "proyecto-moms.appspot.com",
  messagingSenderId: '1052432304334',
  appId: '1:1052432304334:web:b1be1179280dc3ad',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

console.log(Firebase)

export default Firebase;