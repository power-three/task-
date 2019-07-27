import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section class="us container-fluid uswidth">
          <h2 class="heading"><a id="us">US</a></h2>
          <div class="row">
            <div class="col-lg-4">
              <a href="https://github.com/mariams/"> <img class="icon" src="user.png" alt=""></img></a>
              <p class="icon-text"> Mariam <br></br> </p>
            </div>
            <div class="col-lg-4">
              <a href="https://github.com/aljued"><img class="icon" src="user.png" alt=""></img></a>
              <p class="icon-text">Abdullah <br></br></p>
               <p class="me" ></p> 
            </div>
              
           <div class="col-lg-4">
              <a href="https://github.com/GhaidaaS"><img class="icon" src="user.png" alt=""></img></a>
              <p class="icon-text">Ghaida <br></br></p>
               <p class="me" ></p> 
          
          </div> 
          </div>
        </section>
    );
  }
}