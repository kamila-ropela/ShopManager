import React, { useState, useEffect } from "react";
import "../App.css";
import useForm from "react-hook-form";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    axios
      .post("/login", value)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="CompomentBackend">
      <div className="LoginItems">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Login"
            className="InputField"
            name="login"
            ref={register}
          />
          <input
            type="password"
            placeholder="Password"
            className="InputField"
            name="password"
            ref={register}
          />
          <input type="submit" value="Log in" className="InputButton" />
        </form>
      </div>
    </div>
  );
};

export default Login;
