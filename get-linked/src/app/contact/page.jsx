'use client'
import React, { useState } from 'react';
import styled from 'styled-components'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (formData.fullName === '' || formData.email === '' || formData.message === '') {
      alert('Please fill in all fields.');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": formData.email,
        "phone_number": "08124688722",
        "first_name": formData.fullName,
        "message": formData.message
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    setSubmitting(true);
    try {
        
      const response = await fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions);

      if(!response.ok){
        throw new Error("Contact Submission Error");
      }

      //redirect to confirmation
      const result = await response.json();
      console.log('Form submitted successfully.', result);
        // Optionally, reset the form fields:
      setFormData({
            fullName: '',
            email: '',
            message: '',
      });
    } catch (error) {
      console.error('An error occurred: ', error.message);
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <Wrapper>
        <div className='wrapper'>
            <div className='text'>
                <h1>Get in touch</h1>
                <p>Contact Information</p>
                <p>27,Alara Street Yaba 100012 Lagos State</p>
                <p className='call'>Call Us : 07067981819</p>
                <p className='open'>we are open from Monday-Friday 08:00am - 05:00pm</p>
                <span>Share on</span>
            </div>
        <div className='container'>
            <p>Questions or need assistance?</p>
            <p>Let us know  about it!</p>
            <form>
                <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                type="email"
                placeholder="Mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button onClick={handleFormSubmission} disabled={ submitting ? true : '' }>{ submitting ? 'Submitting...' : 'Submit' }</button>
            </form>
        </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
height: auto;
.wrapper {
    display: flex;
    margin-top: 120px;
    padding: 50px;
    .text {
        width: 50%;
        padding: 50px;
        h1 {
            color: #D434FE;
        // font-family: Clash Display;
        font-size: 30px;
        // font-style: normal;
        font-weight: 600;
        line-height: normal;
        }
        p {
            width: 150px;
            color: #FFF;
            margin-top: 30px;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        .call {
            width: 200px;
        }
        .open {
            width: 300px;
            margin-bottom: 30px;
        }
        span {
            color: #D434FE;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    .container {
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
}
`

export default Contact;