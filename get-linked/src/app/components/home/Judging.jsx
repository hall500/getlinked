"use client";
import React from "react";
import styled from "styled-components";

function Judging() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="images">
          <img src="/images/circle.png" alt="circle" className="circle" />
          <img src="/images/judge.png" alt="judge" className="judge"/>
          <img src="/images/star.png" alt="star" className="star" />
          <img src="/images/blur-star.png" alt="blur" className="blur" />
        </div>
        <div className="intro-text">
          <h1>
            Judging Criteria <span>Key attributes</span>
          </h1>
          <p>
            <span>Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p>
            <span>Functionality: </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p>
            <span>Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p>
            <span>Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <button>Read More</button>
          <img src="/images/star pu.png" alt="star" />
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
      button {
        width: 150px;
        height: 50px;
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
  }
`;

export default Judging;
