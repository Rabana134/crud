import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBesIKenC1LlO_ziYJzZYMkqtvtN_VIxFQ",
  authDomain: "nafi-901f3.firebaseapp.com",
  projectId: "nafi-901f3",
  storageBucket: "nafi-901f3.appspot.com",
  messagingSenderId: "120199671664",
  appId: "1:120199671664:web:40a35fae96b7c308f829b5",
  databaseURL: "https://nafi-901f3-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);

export default firebase.database();
