import React, { useState, useEffect, useReducer } from "react";
// COMPONENT
import LogIn from "./components/LogIn";
import { Context } from "./components/Context";
import { reducer, defaultState } from "./reducer";
import { props } from "./data/formData";
// CSS
import "./index.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    setData(props);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div id="main">
        {isLogged
          ? "HOME"
          : data.map((form, i) => <LogIn key={form.id} props={props[i]} />)}
      </div>
    </Context.Provider>
  );
};

export default App;
