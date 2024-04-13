import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRypcHCwGfpC_7o1ki2jqesWG64fdSdCc",
  authDomain: "facebook-78ec7.firebaseapp.com",
  databaseURL: "https://facebook-78ec7-default-rtdb.firebaseio.com",
  projectId: "facebook-78ec7",
  storageBucket: "facebook-78ec7.appspot.com",
  messagingSenderId: "175017246936",
  appId: "1:175017246936:web:9236a63bfa2f47dfc417ad",
  measurementId: "G-H9G8W8PP0F"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
