'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"
import styled from "styled-components";

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Link href='/'><Image src="/images/getlinked.png" alt="logo" width={200} height={50}/></Link>
      <ul style={open !== false ? {height: '100vh', left: 0} : {left: '-100%', overflow: 'hidden'}}>
        <li><a>Timeline</a></li>
        <li><a>Overview</a></li>
        <li><a>FAQs</a></li>
        <li><Link href='/contact'>Contact</Link></li>
        <Link href='/register' className="button">Register</Link>
      </ul>
      <div style={open !== false ? {border: '1px solid #903AFF'} : null}>
        <Image onClick={() => setOpen(!open)} src={open !== false ? "/images/close.png" : "/images/open.png"} alt="open menu" className="hamper" width={35} height={35}/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
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
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        list-style-type: none;
        a {
          text-decoration: none;
          color: #FFF;
        }
    }

    .button {
      display: flex;
        justify-content: center;
        align-items: center;
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
        text-decoration: none;
    }
}
div {
  display: none;
}
@media (max-width: 1200px) {
    padding: 0px 20px;
    ul {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      top: 80px;
      border-radius: 8px;
      border: 0.5px solid rgba(255, 255, 255, 0.04);
      background: #150E28;
      backdrop-filter: blur(30px);
      flex-direction: column;
      align-items: flex-start;
      height: 70vh;
      padding: 100px;
      li {
        margin-bottom: 10px;
      }
      .button {
        width: 200px;
        margin-left: 0;
        margin-top: 10px;
      }
    }
    div {
      display: block;
      width: 35px;
      height: 35px;
      display: flex;
      padding: 10px;
      border-radius: 100%;
    }
  }
`

export default Navbar;