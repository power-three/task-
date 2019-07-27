import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
	<section class="contact">
          <h2 class="heading"><a id="contact">Upload your CV</a></h2>
          <form>
            <label for="fname">First Name</label>
            <input id="fname" type="text" name="first-name" placeholder="First Name"></input>
            <label for="lname">Last Name</label>
            <input id="lname" type="text" name="last-name" placeholder="Last Name"></input>
            <input  type="file"  ></input>
            <input type="submit" value="Upload" onclick="writeUserData()"></input>
          <button class="logout" onclick="logout()">Logout</button>-->
          </form>
        </section>
 
);
  }
}



let first1 = document.getElementById("fname").value;
let second2 = document.getElementById("lname").value;
let database = firebase.database();
let usersRef = database.ref('users');
let selectedFile = document.getElementById('fileInput').onchange = function () {
  alert('Selected file: ' + this.value);
};
function writeUserData(first1, second2) {
  usersRef.push({
      first: first1,
      second: second2,
  });
Upload();
}
function Upload(){
  let fileName=selectedFile.name;
  // Create a root reference
  let storageRef = firebase.storage().ref('/cvs/'+fileName);
    var uploadTask = storageRef.put(selectedFile);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});
  }