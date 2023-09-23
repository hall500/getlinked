'use client'
import Image from "next/image";
import React from "react"
import styled from "styled-components";

function Footer() {
    return (
        <Wrapper>
            <div className="intro-text">
                <Image src="/images/getlinked.png" alt="" width={200} height={50}/>
                <p>
                    Getlinked Tech Hackathon is a technology innovation program
                    established by a group of organizations with the aim of showcasing
                    young and talented individuals in the field of technology
                </p>
                <div>
                    <p>Terms of Use</p>
                    <p className="priv">Privacy Policy</p>
                </div>
                <Image src="/images/blur-star.png" alt="star" className="blur" width={30} height={30}/>
                <Image src="/images/star.png" alt="star" className="star" width={30} height={30}/>
                <p className="right">All rights reserved. © getlinked Ltd.</p>
            </div>
            <div className="content">
                <div>
                    <span>Useful Links</span>
                    <p>Overview</p>
                    <p>Timeline</p>
                    <p>FAQs</p>
                    <p>Register</p>
                    <p className="follow">Follow Us</p>
                </div>
                <div>
                <span>Contact Us</span>
                    <p>+234 6707653444</p>
                    <p className="state">27,Alara Street Yaba 100012 Lagos State</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: 100px;
display: flex;
.intro-text {
    // position: relative;
    width: 480px;
    .right {
        position: absolute;
        // top: 50%;
        left: 40%;
    }
    div {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        p {
        width: 50%;
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
        }
        .priv {
            padding: 0px 0px 0px 15px;
            border-left: 3px solid #D434FE;
        }
    }
    img {
        margin-bottom: 30px;
    }
    p {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 196.429% */
    }
    .blur {
      position: absolute;
      left: 450px;
      top: 200px;
      display: none;
    }
    .star {
      position: absolute;
      left: 680px;
      top: 500px;
      display: none;
    }
  }
  .content {
    display: flex;
    div {
        margin-left: 150px;
        span {
            color: #D434FE;
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: 172.4%; /* 24.136px */
        }
        p {
            margin-bottom: 15px;
            color: #FFF;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 172.4%; /* 20.688px */
        }
        .follow {
            margin-bottom: 15px;
            color: #D434FE;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 172.4%; /* 20.688px */
        }
        .state {
            width: 300px;
        }
    }
  }
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
.intro-text {
    // position: relative;
    width: 100%;
    .right {
        position: absolute;
        // top: 50%;
        left: 40%;
        display: none;
    }
    div {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 30px;
        p {
        width: 50%;
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
        }
        .priv {
            padding: 0px 0px 0px 15px;
            border-left: 3px solid #D434FE;
        }
    }
    img {
        margin-bottom: 30px;
    }
    p {
      color: #fff;
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
  .content {
    flex-direction: column;
    div {
        margin: 0;
        margin-bottom: 30px;
        span {
            color: #D434FE;
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: 172.4%; /* 24.136px */
        }
        p {
            margin-bottom: 15px;
            color: #FFF;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 172.4%; /* 20.688px */
        }
        .follow {
            margin-bottom: 15px;
            color: #D434FE;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 172.4%; /* 20.688px */
        }
        .state {
            width: 300px;
        }
    }
  }
}
`
export default Footer;