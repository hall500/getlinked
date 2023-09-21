'use client'
import React from "react"
import styled from "styled-components";

function Navbar() {
    return (
        <Wrapper>
            <img src="/images/getlinked.png" alt="logo" />
            <ul>
                <li><a>Timeline</a></li>
                <li><a>Overview</a></li>
                <li><a>FAQs</a></li>
                <li><a>Contac</a></li>
                <button>Register</button>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: fixed;
top: 0%;
width: 100%;
height: 100px;
padding: 0px 80px;
display: flex;
justify-content: space-between;
align-items: center;
background: #140d27;
border-bottom: 1px solid rgba(255, 255, 255, 0.18);
z-index: 1000000000000000000000000000;

ul {
    width: 800px;
    height: 60px;
    // gap: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        list-style-type: none;
    }

    button {
        width: 150px;
        height: 50px;
        margin-left: 50px;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
    }
}
`

export default Navbar;