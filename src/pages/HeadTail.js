import { useRef, useState } from "react";
import "../pages/style.css";

export default function App() {
  const [colChange, setColChange] = useState(false);
  const [choosed, setChoosed] = useState("Select a value");
  const lastSelectRef = useRef("");
  const [errmsg, setErrmsg] = useState(false);
  const [data, setData] = useState({
    cols: [],
    data: []
  });

  // let options=['Select a value','Head','Tail']
  let options = [
    {
      id: 1,
      name: "Select a value",
      value: "Select a value"
    },
    {
      id: 2,
      name: "Head",
      value: "H"
    },
    {
      id: 3,
      name: "Tail",
      value: "T"
    }
  ];
  const handleData = (event) => {
    // let val = document.getElementById("game").value;
    //
    document.getElementById("game").value = "Select a value";

    console.log(choosed, "choosed");
    if (choosed === "Select a value") {
      setErrmsg(true);
      return;
    }

    if (choosed !== lastSelectRef.current) {
      let temp = {
        ...data,
        cols: [...data.cols, ""],
        data: [...data.data, [choosed]]
      };
      setData(temp);
      setErrmsg(false);
      setChoosed("Select a value");
    } else {
      let copy = data.data.slice();
      copy[copy.length - 1].push(choosed);
      let temp = {
        ...data,
        data: copy
      };
      setData(temp);
      setErrmsg(false);
      setChoosed("Select a value");
    }
    lastSelectRef.current = choosed;
  };
  console.log("data", data);
  return (
    <div className="App">
      <h1>HEAD TAIL GAME</h1>
      <label for="cars">Choose a coin:</label>
      <select
        id="game"
        name="cars"
        onChange={(e) => {
          setChoosed(e.target.value);
          // e.target.value = "Select a value";
          // document.getElementById("game").value
          // e.target.value = "Select a value";
        }}
      >
        {options.map((val) => {
          return <option value={val.value}>{val.name}</option>;
        })}

        {/* 
        <option value="Select a value">Select a value</option>

        <option value="H">HEAD</option>
        <option value="T">TAIL</option> */}
      </select>
      <button onClick={() => handleData()}>Submit</button>
      <p
        style={{
          display: errmsg ? "flex" : "none",
          color: errmsg ? "red" : "green"
        }}
      >
        Please select the value from the dropdown
      </p>
      <div id="div1" style={{ display: colChange ? "flex" : "no" }}></div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.data.map((val) => {
          return (
            <div className="tenant">
              {val.map((item) => {
                return <p style={{ marginRight: 4 }}>{item}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
