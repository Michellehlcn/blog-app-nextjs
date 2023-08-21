import Image from "next/image";
import React from "react";

const DataStudio = () => {
    return (
        <div>
            <center>
                <div class="container">
                    <div class="row">
                        <div>
                            <div class="modal-body">
                                <Image src="https://Michellehlcn.github.io/Homepage/image1.jpeg" width="180px" alt=""></Image>
                                <h1>Tracking COVID-19 Dataset</h1>
                                <h5><p >Methodology: Python, DataStudio.
                                </p>
                                    <a href="https://datastudio.google.com/u/0/reporting/d7f2c5d5-5819-4445-906f-cda8deca38c9/page/0PoLC" target="_blank">link</a></h5>
                                <br />
                                <div>
                                    <h6>Description</h6>

                                    <p>Disclaimer: This is my personal work with no affiliation to any organisation. Data was based on the website: Vietnam Health Ministry and Johns Hopkins University Centre for Systems Science and Engineering, Reuter. The tracking data might be conflicted and unreflected the existent condition of Covid-19 pandemic in Vietnam. This page is not under any obligation to update or correct any information provided. Statements are subjected to change without notice. No compensation is received.</p>
                                    <p>Here is a screenshoot of the page:</p>
                                    <center><Image src="https://Michellehlcn.github.io/Homepage/image1.jpeg" width="80%" alt=""></Image></center>

                                    <br />
                                    <h6>Read more</h6>
                                    <hr />
                                    <span>See the full analytics <a href="https://datastudio.google.com/u/0/reporting/d7f2c5d5-5819-4445-906f-cda8deca38c9/page/0PoLC" target="_blank" >github repository</a> for more information and source code of the project</span>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </center>
        </div>
    )
}

export default DataStudio;