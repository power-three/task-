import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <section class="about">
          <h2 class="heading"><a id="about">About</a></h2>
          <p>FORTY DAYS Is summer training that allows you to expand your knowledge <br></br> and achive more success by understanding your professional skills with helpful <br></br> supervisors , Here we are k team . </p>
        
        </section>
    );
  }
}
