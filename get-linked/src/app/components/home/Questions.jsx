"use client";
import React from "react";
import styled from "styled-components";

function Questions() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1>
            Questions Criteria Ask<span>Question</span>
          </h1>
          <img src="/images/star pu.png" alt="star" />
        </div>
        <div className="images">
          <img src="/images/questions.png" alt="questions" className="questions"/>
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
//   background: url("/images/multiple.png"),
//     #140d27 -155.25px -155px / 114.411% 118.9% no-repeat;
//   background-blend-mode: hard-light;
//   background-repeat: no-repeat;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    position: relative;
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
    .images {
        .judge {
            z-index: 1000000;
        }
      .circle {
        position: absolute;
        top: 110px;
        left: 200px;
        z-index: -1;
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
      width: 48%;
      h1 {
        width: 300px;
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
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 173.5%;
        margin-bottom: 30px;
        span {
          color: #ff26b9;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 173.5%; /* 27.76px */
        }
      }
      img {
        position: absolute;
        left: 250px;
        top: 50px;
      }
    }
  }
`;

export default Questions;
