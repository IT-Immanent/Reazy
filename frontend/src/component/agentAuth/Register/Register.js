import React from "react";
import "./Register.css";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../../sections/auth/RegisterForm";

function Register() {

  return (
        <div className="RytAgentAccount">
          <div className="AgentCreateAcct">
            <div className="agtCrtHead">
              <h2>Create your account</h2>
            </div>
            <div className="f">
              <RegisterForm />
              {/* <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Full Name{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="e.g. john@smith.com"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputmobile1">
                    Mobile Number
                  </label>
                  <input
                    type="mobile"
                    className="form-control"
                    id="exampleInputmobile1"
                    placeholder="e.g. 0400 000 000"
                  />
                </div>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="********"
                  />
                </div>

                <div className="AgentLogButton">
                  <Link className="MainBTN" component={RouterLink} to="/auth/verify-otp">
                    Continue
                  </Link>
                </div>
              </form> */}
            </div>
          </div>
        </div>
  );
}

export default Register;
