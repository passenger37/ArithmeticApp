import React, { useState } from "react";

export default function QuesCard(props) {
  const dataObj = props.queData;
  const [enteredAns, setEnteredAns] = useState("");

  const ansInputHandler = (e) => {
    setEnteredAns(e.target.value);
  };
  const ansSubmitHandler = (e) => {
    e.preventDefault();
    dataObj.userAnswer = enteredAns;
    props.passAns(enteredAns);
    setEnteredAns("");
  };

  return (
    <div>
      <form onSubmit={ansSubmitHandler}>
        <label htmlFor="ans">
          Question no.{dataObj.id + 1} {dataObj.question}
        </label>
        <input
          id="ans"
          type="number"
          value={enteredAns}
          onChange={ansInputHandler}
        />
        <button type="submit">Next Ques</button>
      </form>
    </div>
  );
}
