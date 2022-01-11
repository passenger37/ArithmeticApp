import React, { useState } from "react";

import QuesCardList from "./QuesCardList";
import QuesObj from "./QuesObj";
export default function QuizWindow(props) {
  const [counter, setCounter] = useState("");

  if (counter === "") {
    return (
      <div>
        <h1>User {props.data}</h1>
        <QuesObj passToApp={setCounter} />
      </div>
    );
  } else {
    // console.log(counter);
    return (
      <div>
        <h1>User {props.data}</h1>
        <QuesCardList quesData={counter} />
      </div>
    );
    // return "";
  }
}
