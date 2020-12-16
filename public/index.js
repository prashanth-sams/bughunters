var config = {
    apiKey: "AIzaSyCjBCD49eOvBLJMCZrZFgOtgIBRDOwSDKY",
    authDomain: "bug-hunters.web.app",
    databaseURL: "https://bug-hunters-default-rtdb.firebaseio.com/",
    projectId: "bug-hunters",
    messagingSenderId: "927125837315"
};

var app = firebase.initializeApp(config);
var db = firebase.firestore(app);

function sendFeedback() {
    db.collection("fb").add({
        name: document.getElementById('fb-name').value,
        email: document.getElementById('fb-email').value,
        comments: document.getElementById('fb-comment').value,
        suggestions: document.getElementById('fb-suggestion').value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    window.alert("Thank you for your feedback");
}