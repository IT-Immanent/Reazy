import React from "react";
import "./Verify.css";
import { SideForm } from "../createAccount/createAccount";

function Verify() {
    
  return (
    <section>
      <div className="Agent_bgg_data">
        <SideForm />
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Let’s verify your account</h2>
            </div>
            <div className="send_code">
              <h6>
                We’ve sent a code to <span>0400 000 000.</span>
              </h6>
            </div>

            <div class="Verify_Code mt-4">
              <input
                class="text-center form-control codeRound"
                type="text"
                maxlength="1"
              />
              <input
                class="text-center form-control codeRound"
                type="text"
                id="input2"
                maxlength="1"
              />
              <input
                class="text-center form-control codeRound"
                type="text"
                id="input3"
                maxlength="1"
              />
              <input
                class="text-center form-control codeRound"
                type="text"
                id="input4"
                maxlength="1"
              />
            </div>

            <div className="dont_receive mt-3">
              <h6>
                Didn’t receive a code?{" "}
                <span>
                  <a href="#">Request again.</a>
                </span>{" "}
              </h6>
            </div>

            <div className="AgentLogButton">
              <a className="MainBTN" href="#">
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
