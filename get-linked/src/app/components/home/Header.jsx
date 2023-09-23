"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Header() {
  const [timeRemaining, setTimeRemaining] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    // Set the target time (00:00:00)
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 1, 0, 0, 0);

    // Update the countdown timer every second
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetTime - currentTime;

      // Calculate hours, minutes, and seconds from the time difference
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Update the state with the remaining time
      setTimeRemaining({
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });

      // Check if the timer has reached 00:00:00 and clear the interval
      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="intro-text">
          <h1 className="title">
            getlinked Tech Hackathon <span>1.0</span>{" "}
            <Image src="/images/link-img.png" alt="link-logo" width={800} height={800}/>{" "}
            <Image src="/images/explode.png" alt="explode" width={800} height={800}/>
          </h1>
          <Image src="/images/star.png" alt="star" className="star" width={800} height={800}/>
          <Image src="/images/light-bulb.png" alt="bulb image" className="bulb" width={800} height={800}/>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button>Register</button>
          <h1 className="timer">
            {timeRemaining.hours}<span>H</span> {timeRemaining.minutes}<span>M</span> {timeRemaining.seconds}<span>S</span>
          </h1>
        </div>
        <div className="bg-img">
          <h1>Igniting a Revolution in HR Innovation</h1>
          <Image src="/images/bar.png" alt="bar" className="bar" width={400} height={20}/>
          <Image src="/images/universe-bg.png" alt="image" className="uni" width={700} height={700}/>
          <Image src="/images/blur.png" alt="image" className="blur" width={0} height={0}/>
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
  padding: 0px 0px 0px 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  .wrapper {
    max-width: 1550px;
    margin: 0% auto;
    display: flex;
    height: 1000px;
    .intro-text {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      position: relative;
      .star {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 5%;
        top: 150px;
      }
      .bulb {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0%;
        top: 25%;
      }
      .title {
        color: #fff;
        font-family: "Wix Madefor Display", sans-serif;
        // font-family: Clash Display;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0px 0px 20px 0px;
        span {
          color: #d434fe;
        }
        img {
          width: 50px;
          height: 50px;
        }
      }
      p {
        width: 520px;
        color: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 166%;
      }
      button {
        width: 150px;
        height: 50px;
        margin-top: 50px;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(
          270deg,
          #903aff 0%,
          #d434fe 56.42%,
          #ff26b9 99.99%,
          #fe34b9 100%
        );
      }
    }
    .timer {
      position: absolute;
      bottom: 100px;
      color: #fff;
      // font-family: 'Montserrat', sans-serif;
      // font-family: 'Roboto', sans-serif;
      font-family: "Unica One", cursive;
      font-size: 60px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      span {
        font-size: 20px;
      }
    }
    .bg-img {
      z-index: 10000000;
      width: 55%;
      background: url("/images/boy-bg.png");
      background-blend-mode: luminosity;
      background-position: bottom;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        position: absolute;
        top: 120px;
        color: #fff;
        font-size: 36px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
      }
      .bar {
        position: absolute;
        top: 155px;
        right: 50px;
      }
      img {
        position: absolute;
      }
      .uni {
        z-index: 1000;
      }
      .blur {
        display: none;
          left: 30%;
          bottom: -100%;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0px;
    .wrapper {
      width: 100%;
      height: auto;
      flex-direction: column;
      .intro-text {
        align-items: center;
        text-align: center;
        height: 750px;
        width: 100%;
        padding: 0px 20px;;
        .title {
          margin: 100px 0px 20px 0px;
        }
        button {
          align-items: center;
          justify-content: center;
        }
      }
      .bg-img {
        width: 100%; 
        background-position: center;
        height: 700px;
        h1 {
          top: 150px;
          font-size: 24px; 
        }
        .bar {
          top: 190px;
          right: 150px;
        }
      }
      .timer {
        font-size: 100px;
        bottom: 50px;
      }
    }
    
  }
`;

export default Header;
