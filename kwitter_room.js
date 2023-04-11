
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCnFR7I4YkfI2dBFxBV_KjNCg5v2iuRFps",
      authDomain: "kwitter-63c48.firebaseapp.com",
      databaseURL: "https://kwitter-63c48-default-rtdb.firebaseio.com",
      projectId: "kwitter-63c48",
      storageBucket: "kwitter-63c48.appspot.com",
      messagingSenderId: "720111614649",
      appId: "1:720111614649:web:0820dcef08262f2dd93968"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");

    document.getElementById("user_name").innerHTML="WELCOME"+username+"!";

    function addroom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}

getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_names", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
