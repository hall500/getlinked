"use client";
import Image from "next/image";
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
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            <button>
              Can I work on a project I started before the hackathon?
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
            <button>
              What happens if I need help during the hackathon?
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
            <button>
              What happens if I don&apos;t have an idea for a project?
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
            <button>
              Can I join a team or do I have to come with one?
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
            <button>
              What happens after the hackathon ends
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
            <button>
              Can I work on a project I started before the hackathon?
              <Image src="/images/plus.png" alt="+" width={20} height={20}/>
            </button>
          </div>
          <Image src="/images/star pu.png" alt="star" className="pu" width={20} height={20}/>
        </div>
        <div className="images">
          <Image
            src="/images/questions.png"
            alt="questions"
            className="questions"
          width={800} height={700}/>
          <Image src="/images/star.png" alt="star" className="star" width={20} height={20}/>
          <Image src="/images/blur-star.png" alt="blur" className="blur" width={20} height={20}/>
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
    padding: 100px 150px;
    .images {
      width: 45%;
      .questions {
        width: 600px;
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
      margin: 0%;
      text-align: center
      align-items: center;
        justify-content: center;
      flex-direction: column;
      padding: 10px;
      .images {
        width: 100%;
        img {
          width: 100%;
        }
        .questions {
          width: 100%;
        }
        .blur,
        .star {
          display: none;
        }
      }
      .intro-text {
        width: 100%;
        text-align: center;
        align-items: center;
        padding: 20px 0px;
        h1 {
          width: 100%;
        }
        p {
          width: 100%;
        }
        div {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export default Questions;
