import React, { useState, useEffect } from "react";
// COMPONENT
import LogIn from "./components/LogIn";

import { props } from "./data/formData";
// CSS
import "./index.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged"))
  );

  useEffect(() => {
    setData(props);
  }, []);

  return (
    <div id="main">
      {isLogged
        ? "HOME"
        : data.map((form, i) => <LogIn key={form.id} props={props[i]} />)}
    </div>
  );
};

export default App;
