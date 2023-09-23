"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Privacy() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1>
          Privacy Policy and <span>Terms</span>
          </h1>
          <p>
          Below are our privacy & policy, which outline a lot of goodies. 
            it’s our aim to always take of our participant
          </p>
          <div className="first">
            <p>
            At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you participate in our tech 
            hackathon event. By participating in our event, you consent 
            to the practices described in this policy.
            </p>
            <span>
            Licensing Policy
            </span>
            <p>
            Here are terms of our Standard License:
            </p>
            <div>
            <p>
                <Image src="/images/verify.png" alt="verify" width={800} height={800}/>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
            </p>
          </div>
          <div>
            <p>
                <Image src="/images/verify.png" alt="verify" width={800} height={800}/>
                You are licensed to use the item available at any free source
                sites, for your project developement
            </p>
          </div>
          <button>Read More</button>
          </div>
          <Image src="/images/star pu.png" alt="star" className="pu" width={35} height={35}/>
        </div>
        <div className="images">
          <Image
            src="/images/factor.png"
            alt="factor"
            className="factor" width={650} height={800}
          />
          <Image
            src="/images/private.png"
            alt="private"
            className="private" width={800} height={800}
          />
          <Image src="/images/star.png" alt="star" className="star" width={35} height={35}/>
          <Image src="/images/blur-star.png" alt="blur" className="blur" width={35} height={35}/>
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
      .private {
        position: absolute;
        top: 200px;
        left: 48%;
        width: 600px;
      }
      .factor {
        top: 0;
        position: absolute;
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
      .pu {
        position: absolute;
        left: 250px;
        top: 50px;
      }
      .first {
        width: 80%;
        padding: 50px;
        display: flex;
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(217, 217, 217, 0.03);
        flex-direction: column;
        margin-top: 100px;
        p {
            width: 95%;
            color: #FFF;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 216.4%; /* 30.296px */
        }
        span {
            color: #D434FE;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 216.4%; /* 34.624px */
        }
        div {
            p {
                display: flex;
                width: 100%;
                align-items: top;
                // justify-content: space-between;
                gap: 15px;
                img {
                    width: 20px;
                    height: 20px;
                    margin-top: 10px;
                }
            }
        }
        button {
            width: 200px;
            height: 50px;
            margin: 0 auto;
            // margin-left: 50px;
            color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            border-radius: 4px;
            background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
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
        .private {
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
        .first {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export default Privacy;
