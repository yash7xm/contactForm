const firebaseConfig = {
    apiKey: "AIzaSyBxwXUKtXiDxet5lDjAgEUAA9x5XipdRiE",
    authDomain: "cswdweb-a610c.firebaseapp.com",
    databaseURL: "https://cswdweb-a610c-default-rtdb.firebaseio.com",
    projectId: "cswdweb-a610c",
    storageBucket: "cswdweb-a610c.appspot.com",
    messagingSenderId: "156334956420",
    appId: "1:156334956420:web:e9e3a19cf6ee05c473c7d1",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("click", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(firstName, lastName, emailid, msgContent);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("form").reset();
  }
  
  const saveMessages = (firstName, lastName, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      firstName: firstName,
      lastName: lastName,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };