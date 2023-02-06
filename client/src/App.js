import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
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
  const [user, setUser] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    setData(props);
  }, []);

  useEffect(() => {
    if (state.token) {
      const headers = { Authorization: `Bearer ${state.token}` };
      const auth = async () => {
        try {
          const { data } = await axios.get("/api/v1/test", { headers });
          if (data) {
            setUser(data["msg"]);
            setIsLogged("true");
          }
        } catch (error) {
          console.log(error);
        }
      };
      auth();
    }
  }, [state.token]);

  return (
    <Context.Provider value={{ dispatch }}>
      <div id="main">
        {isLogged && user ? (
          <div className="formDiv" style={{ width: "90vw" }}>
            WELCOME {user}
          </div>
        ) : (
          data.map((form, i) => <LogIn key={form.id} props={props[i]} />)
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
