"use client";
import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1>
            Rules and <span>Guidelines</span>
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src="/images/blur-star.png" alt="star" className="blur"/>
          <img src="/images/star.png" alt="star" className="star"/>
        </div>
        <div className="images">
          <img src="/images/rules.png" alt="rules" />
          <img src="/images/right.png" alt="right" className="right"/>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    position: relative;
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 200px;
    .intro-text {
      width: 480px;
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
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
      }
      .blur {
        position: absolute;
        left: 450px;
        top: 200px;
      }
      .star {
        position: absolute;
        left: 680px;
        top: 500px;
      }
    }
    .images {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .right {
            position: absolute;
            right: 0%;
            bottom: -50%;
        }
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      width: 100%;
      margin: 0%;
      flex-direction: column-reverse;
      padding: 20px; /* Adjust padding for responsiveness at 768px */
      .intro-text {
        text-align: center;
        max-width: 100%; /* Full width for intro-text at 768px */
        h1 {
          width: 100%;
          font-size: 24px; /* Adjust font size for h1 at 768px */
          span {
            font-size: 24px; /* Adjust font size for span at 768px */
          }
        }
        p {
          font-size: 12px; /* Adjust font size for p at 768px */
          margin-bottom: 10px; /* Adjust margin for spacing at 768px */
        }
        .star {
          display: block; /* Show the star image at 768px */
        }
      }
    }
  }
`;

export default Rules;
