import React from "react";
import $ from "jquery";

const InputDiv = ({ props }) => {
  const focusHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      borderColor: "black",
      backgroundColor: "white",
    });
    $(target).siblings(".label").css({
      fontSize: "1rem",
      fontWeight: "bold",
    });
  };
  const blurHandle = (e) => {
    const target = e.currentTarget;
    $(target).css({
      borderColor: "transparent",
      backgroundColor: "var(--inputBg)",
    });
    $(target).siblings(".label").css({
      fontSize: "0.8rem",
      fontWeight: "initial",
    });
  };
  return (
    <div className={props}>
      <div className="inputDiv">
        <div className="label"> {props.toUpperCase()}</div>
        <input
          type={props}
          name={props}
          onFocus={(e) => focusHandle(e)}
          onBlur={(e) => blurHandle(e)}
        />
      </div>
    </div>
  );
};

export default InputDiv;
