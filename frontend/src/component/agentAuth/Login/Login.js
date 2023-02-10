import React from "react";
import "./Login.css";
import MainLogo from "../../../Images/MainLogo.png";
import google from "../../../Images/Google.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Login() {

    
  return (
    <section>
      <div className="AgentLoginMain">
        <div className="LeftAgentLogin">
          <div className="TopAgentLogin">
            <img src={MainLogo} alt="" />
          </div>

          <div className="AgentLogIn">
            <div className="LogHeading">
              <h1>Agent Login</h1>
              <h6>Welcome back! Please enter your details.</h6>
            </div>
            <div className="LogInForm">
              <form>
                <div className="form-group AdminLogForm">
                  <label className="" for="exampleInputEmail1">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
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
                    placeholder="*****"
                  />
                </div>
                <div className="form-group AgentForgetData">
                  <div class="form-check AgentCheckt">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      {" "}
                      Remember for 30 days{" "}
                    </label>
                  </div>
                  <div className="AgentForget">
                    <a href="#" className="">
                      Forgot Password
                    </a>
                  </div>
                </div>

                <div className="AgentLogButton">
                  <a className="MainBTN" href="#">
                    Sign in
                  </a>
                  <a className="MainBTN2" href="#">
                    <img src={google} alt="" /> Sign in with Google
                  </a>
                </div>

                <div class="AgentSign">
                  <span className="txt1"> Don&rsquo;t have an account? </span>
                  <a className="txt2" href="#">
                    {" "}
                    Sign up - it’s FREE!{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="FooterAgentLogin">
            <h6>© Reazy 2022</h6>
          </div>
        </div>

        <div className="RightAgentLogin">
          {/* <div className="AgentLogImage">
                    <img src={LogImg} alt="" /> 
                </div> */}
          <Swiper
            className="AgentSwiper"
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Login;
function AgentSliders() {
  return (
    <div className="AgentSliders">
      <div className="AgentSlidersData">
        <div className="k"></div>
        <div className="AgentSwipHeading">
          <h2>
            “I was amazed with how easy it was to find a tenant for my listing.”
          </h2>
        </div>
        <div className="agentFooterHead">
          <h3>Olivia Rhye</h3>
          <p>Property Manager</p>
          <p>Ray White</p>
        </div>
      </div>
    </div>
  );
}
