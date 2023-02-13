import React from "react";
import "./InviteTeam.css"

function InviteTeam() {
    
  return (
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct updateAgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Invite your team</h2>
            </div>
            <div className="">
              <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Team Member 1
                  </label>
                  <input
                    type="position"
                    className="form-control mt-2"
                    id="exampleInputPosition1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. john@smith.com"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Team Member 2
                  </label>
                  <input
                    type="Address"
                    className="form-control mt-2"
                    id="exampleInputAddress"
                    aria-describedby="emailHelp"
                    placeholder="e.g. john@smith.com"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Team Member 3
                  </label>
                  <input
                    type="Address"
                    className="form-control mt-2"
                    id="exampleInputAddress"
                    aria-describedby="emailHelp"
                    placeholder="e.g. john@smith.com"
                  />
                </div>
              </form>
            </div>

            <div className="AgentLogButton agentBTN ">
              <a className="MainBTN2" href="#">
                <i className="fa-regular fa-envelope"></i> Send invites
              </a>
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
  );
}

export default InviteTeam;
