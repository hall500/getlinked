"use client";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

function Timeline() {
  const handleLoad = () => {
    window.addEventListener("load", () => {
      window.scroll(0, 0);
    });
  };
  useEffect(() => {
    window.scroll(0, 0);
    handleLoad();
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".resume-scroll").forEach((scrollElement, i) => {
      gsap.fromTo(
        scrollElement,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          visibility: "visible",
          scrollTrigger: {
            trigger: scrollElement,
          },
        }
      );
    });

    gsap.utils.toArray(".resume-scroll-right").forEach((scrollElement, i) => {
      gsap.fromTo(
        scrollElement,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          visibility: "visible",
          scrollTrigger: {
            trigger: scrollElement,
          },
        }
      );
    });

    gsap.utils.toArray(".resume-scroll-left").forEach((scrollElement, i) => {
      gsap.fromTo(
        scrollElement,
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          visibility: "visible",
          scrollTrigger: {
            trigger: scrollElement,
          },
        }
      );
    });
  }, []);
  return (
    <Wrapper>
      <div
        className="credentials resume-scroll"
        style={{ visibility: "hidden" }}
      >
        <div
          className="my-credentials cred resume-scroll"
          style={{ visibility: "hidden" }}
        >
          <h1 className="time">Timeline</h1>
          <p className="break">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div className="experience resume-scroll">
            <div className="title resume-scroll-right">
              <h1>Hackathon Announcement</h1>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="writeup">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>1</p>
              </div>
              <div className="resume-scroll-left">
                <h1>November 18, 2023</h1>
              </div>
            </div>
          </div>
          <div
            className="experience resume-scroll"
            style={{ visibility: "hidden" }}
          >
            <div className="title resume-scroll-right">
              <h1>November 18, 2023</h1>
            </div>
            <div className="writeup">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>2</p>
              </div>
              <div className="resume-scroll-left">
                <h1>Teams Registration begins</h1>
                <div className="line"></div>
                <p>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
          </div>
          <div
            className="experience ex resume-scroll"
            style={{ visibility: "hidden" }}
          >
            <div className="title resume-scroll-right">
              <h1>Teams Registration ends</h1>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <div className="writeup exp">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>3</p>
              </div>
              <div className="resume-scroll-left">
                <h1>November 18, 2023</h1>
              </div>
            </div>
          </div>
          <div className="experience resume-scroll">
            <div className="title resume-scroll-right">
              <h1>November 18, 2023</h1>
            </div>
            <div className="writeup">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>4</p>
              </div>
              <div className="resume-scroll-left">
                <h1>Announcement of the accepted teams and ideas</h1>
                <div className="line"></div>
                <p>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
          </div>
          <div
            className="experience resume-scroll"
            style={{ visibility: "hidden" }}
          >
            <div className="title resume-scroll-right">
              <h1>Getlinked Hackathon 1.0 Offically Begins</h1>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="writeup">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>5</p>
              </div>
              <div className="resume-scroll-left">
                <h1>November 18, 2023</h1>
              </div>
            </div>
          </div>
          <div
            className="experience ex resume-scroll"
            style={{ visibility: "hidden" }}
          >
            <div className="title resume-scroll-right">
              <h1>November 18, 2023</h1>
            </div>
            <div className="writeup exp">
              <div className="img">
                <img src="../images/timeline.png" alt="" />
                <p>6</p>
              </div>
              <div className="resume-scroll-left">
                <h1>Demo Day</h1>
                <p>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1540px;
  margin: 0 auto;
  padding: 70px 15px 30px;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    margin: 0 auto 30px auto;
  }

  .row button {
    font-size: 16px;
    padding: 6px 12px;
    color: #fff;
    background-color: #623686;
    border: 1px solid #623686;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
  }

  .row button:hover {
    background-color: rgba(109, 32, 197, 0.8431372549019608);
    border: 1px solid rgba(109, 32, 197, 0.8431372549019608);
  }

  .credentials {
    max-width: 1140px !important;
    margin: 0 auto;
    padding: 50px 0 0 0 !important;
  }

  .credentials h5 {
    font-size: 36px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 2px;
    text-align: center;
    color: #a9a9a9;
  }

  .credentials p {
    color: #a9a9a9;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
  }

  .my-credentials {
    padding: 80px 0 0 0;
    .time {
      color: #fff;
      font-family: "Wix Madefor Display", sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 0%; /* 0px */
    }
    .break {
      width: 350px;
      margin: 0% auto;
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }

  .cred {
    padding: 50px 0 0 0 !important;
  }

  .my-credentials h1 {
    font-size: 30px;
    font-weight: 600;
    margin: 0 0 24px 0 !important;
    padding: 0 !important;
    text-align: center;
  }

  .experience {
    display: flex;
    justify-content: space-between;
    // height: 250px;
    padding: 20px 0 0 0;
  }

  .title {
    width: 50%;
    padding: 0px 100px 20px 1px;
    h1 {
      color: #d434fe;
      text-align: right !important;
      font-weight: 500;
      margin: 0 0 0px !important;
      font-size: 20px;
      font-weight: 700;
    }
    p {
        // width: 400px;
      text-align: right !important;
      color: #fff;
      font-size: 14px;
      margin: 0 0 16px;
      line-height: 30px;
      font-weight: 400;
    }
  }

  .writeup {
    width: 60%;
    text-align: left !important;
    border-left: 3.5px solid #d434fe;
    padding: 0px 1px 20px 60px;
    position: relative;
    h1 {
      color: #d434fe;
      text-align: left !important;
      font-weight: 500;
      margin: 0 0 8px !important;
      font-size: 20px;
      font-weight: 700;
    }
    p {
        width: 460px;
      text-align: left !important;
      font-weight: 500;
      color: #fff;
      font-size: 15px;
      margin: 0 0 16px;
      line-height: 30px;
    }
  }

  .img {
    position: absolute;
    left: -35px;
    top: -20px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    p {
      position: absolute;
      font-size: 30px;
      top: 20px;
      left: 40%;
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .exp {
    border-left: none !important;
  }

  @media (max-width: 1200px) {
    padding: 70px 30px 0px;
    .row {
      max-width: 960px;
    }
    .credentials {
      max-width: 960px !important;
      padding: 20px 0 0 0 !important;
    }
    .my-credentials {
      padding: 50px 0 0 0;
    }
  }
  @media (max-width: 768px) {
    padding: 70px 30px 0px;
    .row {
      max-width: 400px;
    }
    .credentials {
      max-width: 460px !important;
      padding: 0px 0px 0 20px !important;
    }
    .my-credentials {
      padding: 20px 0 0 0;
    }
    .credentials h5 {
      font-size: 25px;
    }
    .credentials p {
      font-size: 14px;
      line-height: 25px;
    }
    .experience {
      flex-direction: column;
      height: max-content;
      position: relative;
      padding: 0 !important;
      margin: 20px 0 0 0 !important;
      border-left: 1px solid #a9a9a9;
    }
    .title {
      width: 100%;
      padding: 0px 1px 20px 35px !important;
      margin-top: -15px;
    }
    .writeup {
      width: 100%;
      padding: 0px 1px 20px 35px !important;
      position: static !important;
      border: none;
    }
    .title h1,
    .title p {
      text-align: left !important;
    }
    .my-credentials h1 {
      font-size: 23px;
      margin: 0 0 40px 0 !important;
    }
    .writeup h1 {
      margin: 0 0 8px 0 !important;
    }
    .title h1 {
      margin: 0 !important;
      font-size: 16px;
    }
    .writeup p {
      font-size: 14px;
      line-height: 25px;
    }
    .writeup h1 {
      margin: 8 !important;
      font-size: 16px;
    }
    .title p {
      font-size: 14px;
    }
    .ex {
      border: none;
    }
    .img {
      left: -25px;
      top: -20px;
      width: 50px;
      height: 50px;
    }
    .img img {
      width: 20px;
    }
    .cred {
      padding: 40px 0 0 0 !important;
    }
  }
`;

export default Timeline;
