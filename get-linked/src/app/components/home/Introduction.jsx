"use client";
import React from "react";
import styled from "styled-components";

function Introduction() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="images">
          <img src="/images/sata gra.png" alt="sata" className="sata" />
          <img src="/images/mind.png" alt="mind-bulb" />
          <img src="/images/arrow.png" alt="arrow" className="arrow"/>
        </div>
        <div className="intro-text">
          <h1>
            Introduction to getlinked <span>tech Hackathon 1.0</span>
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src="/images/star pu.png" alt="star" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    position: relative;
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 200px;
    .images {
      .sata {
        position: absolute;
        top: 250px;
        left: 150px;
      }
    }
    .intro-text {
      width: 480px;
      h1 {
        width: 450px;
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
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
      }
      img {
        position: absolute;
        right: 200px;
        top: 220px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 50px 10px; /* Adjust padding for screens of 768px or less */
    
    .wrapper {
      flex-direction: column;
      width: 100%;
      margin: 0%;
      .images {
        margin-bottom: 80px;
        .sata {
          top: 150px; /* Adjust image position for smaller screens */
        }
        .arrow {
          margin-left: 45%;
          width: 50px;
          height: 50px;
        }
      }
      .intro-text {
        text-align: center;
        h1 {
          font-size: 24px; /* Adjust font size for smaller screens */
          span {
            font-size: 24px; /* Adjust font size for smaller screens */
          }
        }
        p {
          font-size: 12px; /* Adjust font size for smaller screens */
        }
      }
    }
  }
`;

export default Introduction;
