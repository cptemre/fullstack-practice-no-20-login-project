import React, { useState, useEffect } from "react";
import $ from "jquery";
import InputDiv from "./InputDiv";
import { inputData } from "../data/inputData";
const LogIn = ({ props }) => {
  const { id, header, success } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(inputData);
  }, []);

  const enterHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      height: "60vh",
      backgroundColor: "var(--bgHover)",
    });
    $(target).children("form").css("transform", "scale(1)");
  };
  const leaveHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      height: "20vh",
      backgroundColor: "var(--bgColor)",
    });

    $(target).children("form").css("transform", "scale(0)");
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
        <button>SUBMIT</button>
      </form>
      <h3 className="msg"></h3>
    </div>
  );
};

export default LogIn;
