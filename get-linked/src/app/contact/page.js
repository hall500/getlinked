'use client'
import React from 'react'
import styled from 'styled-components'

function page() {
  return (
    <Wrapper>
        <div className='container'>
            <p>Questions or need assistance?</p>
            <p>Let us know  about it!</p>
            <form>
                <input type='text' placeholder='Full Name' className='name'/>
                <input type='email' placeholder='Mail' />
                <textarea placeholder='Message' />
                <button>Submit</button>
            </form>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100%;
height: auto;
.container {
    margin-top: 120px;
    width: 600px;
    height: 600px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 50px;
    p {
        color: #D434FE;
        // font-family: Clash Display;
        font-size: 20px;
        // font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    form {
        display: flex;
        flex-direction: column;
        // height: 300px;
        input,
        textarea {
            height: 40px;
            margin-top: 50px;
            border-radius: 4px;
            border: 1px solid #FFF;
            padding: 0px 25px;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            &::placeholder {
                color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            }
        }
        textarea {
            padding: 25px;
            height: 150px;
            margin-bottom: 30px;
        }
        button {
            width: 150px;
            height: 50px;
            margin: 0 auto;
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
`

export default page