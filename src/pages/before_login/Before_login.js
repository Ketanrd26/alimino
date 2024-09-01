import React from "react";
import "../before_login/before.scss";

// icons

import { FaLinkedinIn } from "react-icons/fa";
const Before_login = () => {
  return (
    <>
      <div className="home-page-parent parent">
        <div className="home-page-cont cont">
          <div className="box">
            <div className="social-icons">
              <div className="logo">
                logo
              </div>
              <div className="icons">
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <div className="tag">
              <h4>
                Welcome to BVCOEW'S
                <br />
                Student alumini <br />
                association
              </h4>
            </div>
            <div className="login">
              Login Your Account
            </div>
            <div className="register">
              Register Your Page
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Before_login;
