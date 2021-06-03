// Your web app's Firebase configuration
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
