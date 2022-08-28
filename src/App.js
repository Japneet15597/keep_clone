import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <div
        style={{
          flexDirection: "column",
          width: "90%",
        }}
      >
        <textarea
          rows={4}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #999999",
            width: "100%",
            fontSize: 16,
            boxShadow: "2px 2px 10px #999999",
          }}
        />

        <button
          style={{
            padding: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 8,
            border: "1px solid #000000",
            backgroundColor: "#29548C",
            color: "white",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "2px 2px #000000",
          }}
          onClick={() => {
            if (inputVal) {
              setInputVal("");
              setNotes([...notes, inputVal]);
            } else {
              alert("cannot be empty");
            }
          }}
        >
          Save
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: 30,
            marginTop: 40,
          }}
        >
          {notes.map((item) => {
            return (
              <div style={{}}>
                <div
                  style={{
                    padding: 10,
                    borderRadius: 8,
                    border: "1px solid #999999",
                    width: "100%",
                    fontSize: 16,
                    boxShadow: "2px 2px 10px #999999",
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
