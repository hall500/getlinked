'use client'
import React, { useState } from 'react'
import styled from 'styled-components'

function page() {
  const [detail, setDetail] = useState({
    teamName: "",
    projectName: "",
    phone: "",
    email: "",
    agree: false,
  });
  const [categories, setCategories] = useState([]);
  const baseUrl = "https://backend.getlinked.ai";

  const fetchCategoryList = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const response = await fetch(`${baseUrl}/hackathon/categories-list`, requestOptions)
      let result = await response.json();
      console.log(result);
      setCategories(result);

    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCategoryList();
  }, []);

  const handleFormSubmition = async (e) => {
    e.preventDefault();

    if (detail.teamName === "" || detail.projectName === "" || !detail.agree) {
      console.log('An Error occurred');
      return;
    }

    console.log(detail);
    return;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": detail.email,
      "phone_number": detail.phone,
      "team_name": detail.teamName,
      "group_size": detail.group_size,
      "project_topic": detail.projectName,
      "category": detail.category,
      "privacy_poclicy_accepted": detail.agree
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch(`${baseUrl}/hackathon/registration`, requestOptions);
    const result = await response.json();
    console.log(result);
  };


  return (
    <Wrapper>
      <div className="wrapper">
        <div className='images'>
          <img src='/images/image.png' />
        </div>
        <div className='container'>
          <h1>Register</h1>
          <p>Be part of this movement!</p>
          <h2>CREATE YOUR ACCOUNT</h2>
          <form onSubmit={(event) => handleFormSubmition(event) }>
            <div className="username-field">
              <label htmlFor="teamName">
                Team's Name
                <br />
                <input
                  type="text"
                  id="name"
                  name="Name"
                  value={detail?.teamName}
                  onChange={(e) =>
                    setDetail({
                      ...detail,
                      teamName: e.target.value,
                    })
                  }
                  placeholder="Enter the name of your group"
                  required
                />
              </label>

              <label htmlFor="lastName">
                Phone
                <br />
                <input
                  type="number"
                  id="name"
                  name="phone"
                  value={detail?.phone}
                  onChange={(e) =>
                    setDetail({
                      ...detail,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Enter your phone number"
                  required
                />
              </label>
            </div>
            <div className="username-field">
              <label htmlFor="email">
                Email
                <br />
                <input
                  type="email"
                  id="name"
                  name="email"
                  value={detail?.email}
                  onChange={(e) =>
                    setDetail({
                      ...detail,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                  required
                />
              </label>

              <label htmlFor="topic">
                Project Topic
                <br />
                <input
                  type="text"
                  id="name"
                  name="project_topic"
                  value={detail?.projectName}
                  onChange={(e) =>
                    setDetail({
                      ...detail,
                      projectName: e.target.value,
                    })
                  }
                  placeholder="What is your group project topic"
                  required
                />
              </label>
            </div>
            <div className="username-field">
              <label htmlFor="category">
                Category
                <br />
                <select
                  id="name"
                  name="category"
                  required
                  onChange={() =>
                    setDetail({
                      ...detail,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="0">Select your category</option>
                  {categories.map((category, index) => {
                    const { id, name } = category;
                    return <option key={id} value={id}>{name}</option>;
                  })}
                </ select>
              </label>

              <label htmlFor="group">
                Group Size
                <br />
                <select
                  id="name"
                  name="group_size"
                  required
                  onChange={() =>
                    setDetail({
                      ...detail,
                      group_size: e.target.value,
                    })
                  }
                >
                  <option value="0">Select</option>
                  <option value="10">1-10</option>
                  <option value="100">11-100</option>
                  <option value="200">101-200</option>
                </select>
              </label>
            </div>
            <label htmlFor="checkbox" className="check-wrap">
              <input
                type="checkbox"
                id="checkbox"
                checked={detail?.agree}
                onChange={() =>
                  setDetail({
                    ...detail,
                    agree: !detail?.agree,
                  })
                }
                required
              />
              I agree to the Terms and Conditions.
              <span className="check"></span>
            </label>
            <br />
            <button>Register Now</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100%;
height: auto;
.wrapper {
    margin-top: 120px;
    display: flex;
    .container {
        width: 650px;
        // height: 800px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
            color: #FFF;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 25px 0px 25px 0px;
        }
        h2 {
            color: #FFF;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        form {
            display: flex;
            flex-direction: column;
            // height: 300px;
            .username-field {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                label {
                    margin-top: 30px;
                    color: #FFF;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
              }
              .check-wrap {
                display: block;
                position: relative;
                padding-left: 35px;
                cursor: pointer;
                color: #FFF;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-top: 30px;
              }
              .check-wrap input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
              }
              .check {
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
                width: 20px;
                background: #ffffff;
                border: 1px solid #d0d5dd;
                border-radius: 6px;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
              }
              .check-wrap input:checked ~ .check {
                background-color: white;
                border: 1px solid #1570ef;
              }
              .check:after {
                content: "";
                position: absolute;
                display: none;
              }
              .check-wrap input:checked ~ .check:after {
                display: block;
              }
              .check-wrap .check:after {
                left: 6px;
                top: 1px;
                width: 3px;
                height: 9px;
                border: solid #1570ef;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
              }
            input,
            select,
            textarea {
                height: 40px;
                margin-top: 10px;
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
                    color: rgba(255, 255, 255, 0.25);
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
            select {
                width: 250px;
            }
            button {
                width: 100%;
                height: 50px;
                margin: 0 auto;
                margin-top: 30px;
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

export default page