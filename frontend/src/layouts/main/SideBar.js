import React from "react";
import WhiteMainLogo from "../../Images/WhiteMainLogo.png";
import "./sidebar.css"
const SideBar = () => {
  return (
    <div className="LeftAgentAccount">
      <div className="TopAgentLogin">
        <img src={WhiteMainLogo} alt="" />
      </div>
      <div className="Agent_account_Data">
        <ul id="progressbar" class="text-center">
          <li class="active step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Create your account</h4>
                <h6>Let’s get your account setup</h6>
              </div>
            </a>
          </li>

          <li class="active step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Let’s verify your account</h4>
                <h6>We’ll send you a code</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Complete your profile</h4>
                <h6>Let’s get your profile looking good</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Business Details</h4>
                <h6>Tell us more about your business</h6>
              </div>
            </a>
          </li>

          <li class=" step0">
            <a href="#">
              <div className="OpenAccount">
                <h4>Invite your team</h4>
                <h6>Start collaborating with your team</h6>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="creatAgentLogin">
        <h6>© Reazy 2022</h6>
        <div className="support">
          <i className="fa-regular fa-envelope"></i>
          <h6>support@reazy.com</h6>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
