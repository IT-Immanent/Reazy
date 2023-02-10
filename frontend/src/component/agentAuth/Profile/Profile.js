import React from "react";
import "./Profile.css";
import { SideForm } from "../createAccount/createAccount";
import Upload from "../../../Images/upload.png";

function Profile() {
  return (
    <section>
      <div className="Agent_bgg_data">
        <SideForm />
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct updateAgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Complete your profile</h2>
            </div>

            <div className="f">
              <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Position
                  </label>
                  <input
                    type="position"
                    className="form-control mt-2"
                    id="exampleInputPosition1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. Property Manager"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Your Photo
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

export default Profile;
