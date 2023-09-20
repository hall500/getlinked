"use client";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1>
            getlinked Tech Hackathon <span>1.0</span>{" "}
            <img src="/images/link-img.png" alt="link-logo" />{" "}
            <img src="/images/explode.png" alt="explode" />
          </h1>
          <img src="/images/star.png" alt="star" className="star" />
          <img src="/images/light-bulb.png" alt="bulb image" className="bulb" />
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button>Register</button>
          <h1>0H 0M 0S</h1>
        </div>
        <div className="bg-img">
          <img src="/images/universe-bg.png" alt="image" className="uni" />
          <img src="/images/blur.png" alt="image" className="blur" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: url("/images/multiple.png"),
    #140d27 -155.25px -155px / 114.411% 118.9% no-repeat;
  background-repeat: no-repeat;
  padding: 0px 0px 0px 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    height: 850px;
    .intro-text {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      position: relative;
      .star {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 5%;
        top: 5%;
      }
      .bulb {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0%;
        top: 25%;
      }
      h1 {
        color: #fff;
        // font-family: Clash Display;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0;
        img {
          width: 50px;
          height: 50px;
        }
      }
      p {
        width: 500px;
        color: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 166%;
      }
      button {
        width: 150px;
        height: 50px;
        margin-top: 50px;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(
          270deg,
          #903aff 0%,
          #d434fe 56.42%,
          #ff26b9 99.99%,
          #fe34b9 100%
        );
      }
    }
    .bg-img {
      z-index: 10000000;
      width: 55%;
      background: url("/images/boy-bg.png");
      background-blend-mode: luminosity;
      background-position: bottom;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
      }
      .uni {
        z-index: 1000;
      }
      // .blur {
      //     left: 30%;
      //     bottom: -100%;
      // }
    }
  }
`;

export default Header;
