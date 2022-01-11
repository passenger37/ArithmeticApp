import React, { useState } from "react";
import QuesCard from "./QuesCard";
import ResultCards from "./ResultCards";

export default function QuesCardList(props) {
  const dataObjArr = props.quesData;

  const [enteredAnsArr, setEnteredAnsArr] = useState([]);

  const funcHandler = (ans) => {
    setEnteredAnsArr((prev) => {
      return [...prev, ans];
    });
    // console.log(ans, enteredAnsArr.length);
  };

  if (enteredAnsArr.length < dataObjArr.length) {
    return (
      <QuesCard
        queData={dataObjArr[enteredAnsArr.length]}
        key={enteredAnsArr.id}
        passAns={funcHandler}
      />
    );
  } else {
    // console.log(enteredAnsArr, dataObjArr);
    return <ResultCards IntialData={dataObjArr} InputData={enteredAnsArr} />;
  }
}
