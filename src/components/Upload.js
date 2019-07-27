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
            <input type="submit" value="Upload"></input>
          </form>
        </section>
 
);
  }
}

