/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";

const SwingStates = () => {
    return (
        <center>
      
        
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="modal-body">
                      <Image src="https://Michellehlcn.github.io/Homepage/image2.jpeg" width="180px" alt=""></Image>
                      <h1>Swing States</h1>
                      <h5><p >16 battleground states voted and momentum on Electoral College Map from 1976 – 2020
                      </p>
                     <a className="btn btn-primary btn-l text-uppercase" href="https://michellehlcn.wordpress.com/2021/05/27/swing-states/" target="_blank">link</a></h5>
                      <br/>
                      <div >
                        <h6>Description</h6>
                        <hr/>
                        <p>Historically, there were a list of states called <code>“Swing States”</code> which their states can be reasonably won by either the Democratic or Republican presidential candidate by a swing in votes. This post will break down how 16 battleground states voted and momentum on Electoral College Map from 1976 – 2020</p>
    
                        <p>Methodology : The chart of swing states used the methodology of Nate Silver – who is the founder of <code>@FiveThirtyEight</code> for determining tipping point states. The tipping-point state is the first state that gives the winning candidate a majority of electoral votes, thereby securing the candidate’s victory in the Electoral College. Since the number of electors was set to 538 prior to the 1964 United States presidential election, 270 votes have been required to win the Electoral College.</p>
                        
                        <p>Here is a screenshoot of the page:</p>
                  
                        <center><Image src="https://Michellehlcn.github.io/Homepage/images/swingstate2.png" width="80%" alt=""></Image></center>
                        <p>Blue Walls – Wisconsin and Michigan or Pennsylvania were historically blue walls, however, in 2016 they were successfully carried by Trump by less than 1 point, Biden in 2020, inversely, had flipped them over and brought them back on their stakes</p>
                        
                        <center><Image src="https://Michellehlcn.github.io/Homepage/images/swingstate3.png" width="80%" alt=""></Image></center>
    
                        <br/>
                        <h6>Read more</h6>
                        <hr/>
                        <span>See the full analytics on <a className="btn btn-secondary btn-l text-uppercase" href="https://michellehlcn.wordpress.com/2021/05/27/swing-states/" target="_blank" >Wordpress</a> for more information and source code of the project</span>
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </center>
    )
}

export default SwingStates;