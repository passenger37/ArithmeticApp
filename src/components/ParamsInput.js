import React, { useState } from "react";
import "./ParamsInput.css";

export default function ParamsInput(props) {
  const [num, setNum] = useState(3);
  const [range, setRange] = useState(10);
  const [checkState, setCheckedState] = useState(new Array(4).fill(true));

  const numInputHandler = (e) => {
    setNum(e.target.value);
  };
  const rangeInputHandler = (e) => {
    setRange(e.target.value);
  };
  const checkHandler = (e) => {
    setCheckedState((prev) => {
      return prev.map((v, i) => {
        if (i === +e.target.value) {
          if (v) {
            return false;
          }
          return true;
        }
        return v;
      });
    });

    // console.log(checkState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.getUserPara(num, range, checkState);
  };

  return (
    <div>
      <h1> Welcome to Arthmetic App </h1>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="num">
            number of question you would like to solve [choose btw 3-20]
          </label>
          <br />
          <input
            id="num"
            type="number"
            value={num}
            min="3"
            max="20"
            onChange={numInputHandler}
          />
        </p>
        <p>
          <label htmlFor="range">
            range of numbers in questions [choose btw 8-15 ]
          </label>
          <br />
          <input
            id="range"
            type="number"
            value={range}
            min="8"
            max="15"
            onChange={rangeInputHandler}
          />
        </p>

        <p>Select Your Operators</p>
        <div className="www">
          <input
            id="op"
            type="checkbox"
            value="0"
            checked={checkState[0]}
            onChange={checkHandler}
          />
          <label htmlFor="op">/</label>

          <input
            id="op1"
            type="checkbox"
            value="1"
            checked={checkState[1]}
            onChange={checkHandler}
          />
          <label htmlFor="op1">*</label>

          <input
            id="op2"
            type="checkbox"
            value="2"
            checked={checkState[2]}
            onChange={checkHandler}
          />
          <label htmlFor="op2">+</label>

          <input
            id="op3"
            type="checkbox"
            value="3"
            checked={checkState[3]}
            onChange={checkHandler}
          />
          <label htmlFor="op3">-</label>
        </div>
        <p>
          <button type="submit">Start Quiz</button>
        </p>
      </form>
    </div>
  );
}
