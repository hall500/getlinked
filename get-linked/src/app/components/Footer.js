'use client'
import React from "react"
import styled from "styled-components";

function Footer() {
    return (
        <Wrapper>
            <div className="intro-text">
                <img src="/images/getlinked.png" alt="" />
                <p>
                    Getlinked Tech Hackathon is a technology innovation program
                    established by a group of organizations with the aim of showcasing
                    young and talented individuals in the field of technology
                </p>
                <div>
                    <p>Terms of Use</p>
                    <p className="priv">Privacy Policy</p>
                </div>
                <img src="/images/blur-star.png" alt="star" className="blur" />
                <img src="/images/star.png" alt="star" className="star" />
            </div>
            <div className="content">
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: 100px 200px;
.intro-text {
    width: 480px;
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
    }
    .star {
      position: absolute;
      left: 680px;
      top: 500px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .intro-text {
        padding: 0; /* Remove padding for smaller screens */
        
        div {
            margin-top: 20px; /* Adjust margin for links for smaller screens */
            
            p {
                font-size: 12px; /* Adjust font size for links for smaller screens */
                padding: 5px 0; /* Adjust padding for links for smaller screens */
            }
            
            &.priv {
                margin-top: 10px; /* Adjust margin for "Privacy Policy" link */
            }
        }
        
        .blur {
            display: block; /* Show the blurred star image for smaller screens */
            position: static; /* Remove absolute positioning for smaller screens */
            margin: 20px auto; /* Center-align the blurred star image */
        }
        
        .star {
            display: block; /* Show the star image for smaller screens */
            position: static; /* Remove absolute positioning for smaller screens */
            margin: 20px auto; /* Center-align the star image */
        }
    }
}
`
export default Footer;