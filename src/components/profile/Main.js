import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/footers.js";
import "./Main.css"
import Github from "./Github";
import Codeforces from "./Codeforces";

export default ({isLoggedIn}) => {
  return (
    <AnimationRevealPage>
      <Header isLoggedIn={isLoggedIn} />
      <div className="main_profile_heading">
        <p className="heading">PROFILES</p>
      </div>
      <div className="main_profile">
        <div className="user_img">
          <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2018/11/29/original/Akshay-Kumar.jpg" alt="User Image"></img>
          <p className="userName">singhcoder694</p>
        </div>
        <div className="user_details">
          <div className="user_">
            <p className="user_head">Name</p>
            <p className="user_data">Vivek Singh</p>
          </div>
          <div className="user_">
            <p className="user_head">Email</p>
            <p className="user_data">vivekkr694@gmail.com</p>
          </div>
          <div className="user_">
            <p className="user_head">Subscription</p>
            <p className="user_data">Pro</p>
          </div>
          <div className="user_">
            <p className="user_head">Contact</p>
            <p className="user_data">+91 4982348998</p>
          </div>
        </div>
      </div>
      <Github />
      <Codeforces />
      <Footer />
    </AnimationRevealPage>
  );
};
