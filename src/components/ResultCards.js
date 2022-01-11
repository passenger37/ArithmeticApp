import React, { useState } from "react";
import ResultCard from "./ResultCard";

export default function ResultCards(props) {
  const quesObjArr = props.IntialData;
  const len = quesObjArr.length;
  let score = 0;
  for (let i = 0; i < len; i++) {
    // console.log("trtr");
    if (quesObjArr[i].answer == quesObjArr[i].userAnswer) {
      quesObjArr[i].w = true;
      score++;
      continue;
      // console.log("yes");
    }
    quesObjArr[i].w = false;
  }
  // console.log(quesObjArr);
  return (
    <div>
      <h1>
        your score is : {score}/{len}
      </h1>

      {quesObjArr.map((o) => {
        return <ResultCard in={o} key={o.id} />;
      })}
    </div>
  );
}
