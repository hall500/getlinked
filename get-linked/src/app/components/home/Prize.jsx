"use client";
import React from "react";
import styled from "styled-components";

function Prize() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="images">
          <img src="/images/cup.png" alt="cup" className="cup" />
          <img src="/images/star.png" alt="star" className="star" />
          <img src="/images/blur-star.png" alt="blur" className="blur" />
        </div>
        <div className="intro-text">
          <div className="title">
          <h1>
            Prizes and <span>Rewards</span>
          </h1>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          </div>
          <img src="/images/cup.png" alt="cup" className="cups" />
          <div>
            <img src="/images/Rewards.png" alt="reward" />
          </div>
          <img src="/images/star pu.png" alt="star" className="pu" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  //   background: url("/images/prize-bg.png"),
  //     #140d27 -155.25px -155px / 114.411% 118.9% no-repeat;
  //   background-blend-mode: color-burn;
  //   background-repeat: no-repeat;
  background: url("/images/multiple.png"),
    #140d27 -155.25px -155px / 114.411% 118.9% no-repeat;
  background-blend-mode: hard-light;
  background-repeat: no-repeat;
  //   border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    position: relative;
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 150px;
    .images {
      width: 45%;
      .cup {
        width: 500px;
      }
      .cups {
        display: none;
      }
      .star {
        position: absolute;
        bottom: 100px;
        left: 700px;
      }
      .blur {
        position: absolute;
        bottom: 400px;
        left: 500px;
      }
    }
    .intro-text {
      width: 55%;
      .title {
        h1 {
          width: 200px;
          margin-bottom: 20px;
          color: #fff;
          //         font-family: 'Montserrat', sans-serif;
          // font-family: 'Roboto', sans-serif;
          font-family: "Wix Madefor Display", sans-serif;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          span {
            color: #d434fe;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
          }
        }
        p {
          color: #fff;
          width: 55%;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 173.5%;
          margin-bottom: 80px;
          span {
            color: #ff26b9;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 173.5%; /* 27.76px */
          }
        }
      }
      .pu {
        position: absolute;
        left: 250px;
        top: 50px;
      }
      div {
        display: flex;
        flex-direction: column;
        button {
          height: 30px;
          width: 65%;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          border-bottom: 1px solid #d434fe;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      padding: 50px 20px;
      align-items: center;
      text-align: center;
      width: 100%;
      .images {
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        .cup {
          display: none;
        }
        .cups {
          width: 300px;
          margin: 20px 0;
          display: block;
        }
        .star,
        .blur {
          position: static;
          margin: 20px 0;
        }
      }
      .intro-text {
        width: 100%;
        align-items: center;
        text-align: center;
        justify-content: center;
        .title {
          width: 100%;
          position: abslute;
          h1 {
            width: 100%;
            margin-bottom: 20px;
          }
          p {
            width: 100%;
            margin: 0;
          }
        }
        .pu {
          position: static;
          margin: 20px 0;
        }
        div {
          button {
            width: 100%;
          }
        }
      }
    }
  }

`;

export default Prize;
