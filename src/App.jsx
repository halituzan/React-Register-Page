import React from "react";
import Forminput from "./components/FormInput";
import { useState } from "react";
import "./app.css";
import { Facebook, GitHub } from "@material-ui/icons";
// import { useRef } from 'react';

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email adress!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and includes at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 className="register">Register</h1>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="submitButton">Submit</button>
        <p className="isMember">Already a member? <span>Sign In</span></p>
        <div className="otherRegs">
          <a className="otherReg googleReg">
            <div href="/" className="regIcon iconGit">
              <GitHub />
            </div>
            <p>Continue with Github</p>
          </a>
          <p>or</p>
          <a href="/" className="otherReg facebookReg">
            <div className="regIcon iconFb">
              <Facebook />
            </div>
            <p>Continue with facebook</p>
          </a>
        </div>
      </form>
    </div>
  );
};

export default App;
