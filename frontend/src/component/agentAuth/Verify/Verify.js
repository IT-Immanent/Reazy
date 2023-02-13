import React from "react";
import "./Verify.css";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Verify() {
    
  return (
    
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
                  <a to="#">Request again.</a>
                </span>{" "}
              </h6>
            </div>

            <div className="AgentLogButton">
              <Link component={RouterLink} className="MainBTN" to="/auth/complete-profile">
                Continue
              </Link>
            </div>
          </div>
        </div>
   
  );
}

export default Verify;
