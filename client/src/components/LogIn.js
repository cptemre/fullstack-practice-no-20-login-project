import React, { useState, useEffect, useContext } from "react";
import $ from "jquery";
import axios from "axios";
import validator from "validator";

import InputDiv from "./InputDiv";
import { Context } from "./Context";
import { inputData } from "../data/inputData";
const LogIn = ({ props }) => {
  const { id, header, success } = props;
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    setData(inputData);
  }, []);

  // DISPLAY FORM ON MOUSE ENTER TO DIV
  const enterHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      height: "60vh",
      backgroundColor: "var(--bgHover)",
    });
    $(target).children("form").css("transform", "scale(1)");
  };
  // HIDE FORM AND MESSAGE ON MOUSE LEAVE
  const leaveHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      height: "20vh",
      backgroundColor: "var(--bgColor)",
    });
    $(target).children("form").css("transform", "scale(0)");
    $(target).children(".msg").css("transform", "scale(0)");
  };

  const buttonHandle = async (e) => {
    // SET BEGINNING MESSAGE TO EMPTY
    setMsg("");
    // VARIABLES
    const button = e.currentTarget;
    const formID = $(button).parent("form").attr("id");
    const message = $(button).parent("form").siblings(".msg");
    const email = $(button)
      .siblings(".email")
      .children(".inputDiv")
      .children("input")
      .val();
    const password = $(button)
      .siblings(".password")
      .children(".inputDiv")
      .children("input")
      .val();

    // IF THERE IS EMAIL AND PASSWORD VALUE
    try {
      if (email && password && validator.isEmail(email)) {
        if (formID === "sign-in") {
          const { data } = await axios.post("/api/v1/signin", {
            email,
            password,
          });
          setMsg(data["msg"]);
        } else {
          const { data } = await axios.post("/api/v1/login", {
            email,
            password,
          });
          setMsg(data["msg"]);
          dispatch({type:'TOKEN', payload: data['token']})
        }
      }
    } catch (error) {
      // GET ERROR MESSAGE FROM RESPONSE
      setMsg(error.response.data.msg);
    }
    $(message).css("transform", "scale(1)");
  };
  return (
    <div
      className="formDiv"
      onMouseEnter={(e) => enterHandle(e)}
      onMouseLeave={(e) => leaveHandle(e)}
    >
      <h1>{header}</h1>
      <form id={id} onSubmit={(e) => e.preventDefault()}>
        {data && data.map((info, i) => <InputDiv key={info} props={data[i]} />)}
        <button onClick={(e) => buttonHandle(e)}>SUBMIT</button>
      </form>
      <h3 className="msg">{msg}</h3>
    </div>
  );
};

export default LogIn;
