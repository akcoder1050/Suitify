var firebaseConfig = {
  apiKey: "AIzaSyD5fpySaSZ4T_d3aD9_LPINWuWWhcCE2yk",
  authDomain: "chat-suitify.firebaseapp.com",
  databaseURL: "https://chat-suitify-default-rtdb.firebaseio.com",
  projectId: "chat-suitify",
  storageBucket: "chat-suitify.appspot.com",
  messagingSenderId: "312147520369",
  appId: "1:312147520369:web:fc065cc7dedf11fc85a4d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}