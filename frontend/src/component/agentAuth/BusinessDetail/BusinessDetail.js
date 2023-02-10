import React from "react";
import "./BuisenessDetail.css";
import { SideForm } from "../createAccount/createAccount";
import Upload from "../../../Images/upload.png";

function BusinessDetail() {
  return (
    <section>
      <div className="Agent_bgg_data">
        <SideForm />
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct updateAgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Business Details</h2>
            </div>
            <div className="">
              <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Business Name
                  </label>
                  <input
                    type="position"
                    className="form-control mt-2"
                    id="exampleInputPosition1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. Ray White"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Business Logo
                  </label>
                  <div className="click_upload mt-2">
                    <a href="#">
                      <div className="upload">
                        <img src={Upload} alt="" />
                      </div>
                      <div className="dragupload">
                        <h6>
                          <span>Click to upload</span> or drag and drop{" "}
                        </h6>
                        <h6>PNG, JPG (max 2.5MB)</h6>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Address
                  </label>
                  <input
                    type="Address"
                    className="form-control mt-2"
                    id="exampleInputAddress"
                    aria-describedby="emailHelp"
                    placeholder="e.g. Smith Street"
                  />
                </div>

                <div className="streetAdress">
                  <div className="form-group AdminLogForm">
                    <label className="" for="exampleInputEmail1">
                      Suburb
                    </label>
                    <input
                      type="Suburb"
                      className="form-control mt-2"
                      id="exampleInputSuburb"
                      aria-describedby="emailHelp"
                      placeholder="e.g. Ray White"
                    />
                  </div>
                  <div className="form-group AdminLogForm">
                    <label className="" for="exampleInputEmail1">
                      Postcode
                    </label>
                    <input
                      type="Postcode"
                      className="form-control mt-2"
                      id="exampleInputPostcode"
                      aria-describedby="emailHelp"
                      placeholder="e.g. Ray White"
                    />
                  </div>
                </div>

                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    State
                  </label>
                  <select
                    className="form-select mt-2"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="AgentLogButton agentBTN ">
              <a className="MainBTN" href="#">
                Continue
              </a>
            </div>
            <div className="skips text-center">
              <a className="" href="#">
                Skip for later
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessDetail;
