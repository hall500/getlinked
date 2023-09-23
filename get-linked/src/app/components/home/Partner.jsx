"use client";
import React from "react";
import styled from "styled-components";

function Partner() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1>Partners and Sponsors</h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
          <img src="/images/star pu.png" alt="star" className="pu" />
        </div>
        <div className="images">
          <img
            src="/images/part.png"
            alt="part"
            className="part"
          />
          <img src="/images/star.png" alt="star" className="star" />
          <img src="/images/blur-star.png" alt="blur" className="blur" />
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
    background-blend-mode: hard-light;
    background-repeat: no-repeat;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    position: relative;
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 100px 150px;
    .images {
      width: 100%;
      display: flex;
    justify-content: center;
    align-items: center;
      .part {
        // width: 600px;
        border-radius: 5px;
border: 1px solid #D434FE;
background: rgba(255, 255, 255, 0.01);
padding: 120px;
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
      width: 100%;
      text-align: center;
      h1 {
        margin-bottom: 30px;
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
        width: 40%;
        margin: 0% auto;
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
      padding: 50px 20px; /* Adjust padding for smaller screens */
    }

    .images .part {
      width: 100%;
      padding: 60px; /* Adjust padding for smaller screens */
    }

    .images .star {
      left: 50%; /* Adjust position for smaller screens */
      transform: translateX(-50%);
    }

    .images .blur {
      left: 50%; /* Adjust position for smaller screens */
      bottom: 200px; /* Adjust position for smaller screens */
      transform: translateX(-50%);
    }

    .intro-text p {
      width: 80%; /* Adjust width for smaller screens */
    }

    .intro-text div button {
      width: 100%; /* Adjust button width for smaller screens */
    }
  }
`;

export default Partner;
