import Image from "next/image";
import React from "react";

const Covid19Hotspot =() => {
    return (
<center>
    
      <div className="modal-dialog h-100">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="modal-body">
                  <Image src="https://michellehlcn.github.io/covid19hotspot/" width="180px" alt=""></Image>
                  <h1>COVID-19 Hotspot</h1>
                  <h5><p >A map made to track Covid-19 spreaders
                  </p>
                  <a className="btn btn-primary btn-l text-uppercase" href="https://michellehlcn.github.io/covid19hotspot/">link</a></h5>
                  <br />
                  <div >
                    <h6>Description</h6>
                    <hr/>
                    <p>The hotspots have been variously defined as areas of elevated incidence or prevalence, higher transmission efficiency or risk, or higher probability of disease emergence. To define whether that area is a hotspot is a complex matter, however, this map was based on the HCDC’s declaration which ordered the closure of suburbs immediately in order to control transmission and mitigate further spread.</p>
                    <p>Disclaimer: This is my personal work with no affiliation to any organisation. Data was based on the website: hcdc.vn. Since the number of Covid19 cases has seen risen within Hochiminh City and in Vietnam as a whole, the occurrence of a case of infection in the community with a more transmissible variant of SARS-CoV-2 (Delta variant) and opportunities for wide community exposure, I devoted myself to this page in order to help local folks in navigation of hotspots, bringing out any necessary restriction. It is an urgent task and absolutely needs everyone collaboration.</p>
                    <center><Image src="https://Michellehlcn.github.io/Homepage/Image4.jpeg.jpg" width="80%" alt=""></Image></center>
                            
                    <br />
                    <h6>Read more</h6>
                    <hr />
                    <span>See the associated <a className="btn btn-secondary btn-l text-uppercase" href="https://github.com/Michellehlcn/covid19hotspot" target="_blank">github repository</a> for more information and source code of the project</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  </center>
    )
}
export default Covid19Hotspot;