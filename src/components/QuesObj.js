import React, { useState } from "react";

import ParamsInput from "./ParamsInput";

export default function QuesObj(props) {
  const [InParam, setInParam] = useState("");

  const getInParam = (numQ, rangeNum, opArr) => {
    setInParam({ count: numQ, range: rangeNum, operArr: opArr });
  };

  const dataObject = { id: 0, question: "", answer: 0, userAnswer: -1000 };
  const dataObjectArray = [];

  if (InParam === "") {
    return <ParamsInput getUserPara={getInParam} />;
  } else {
    let rrrr = 0;
    // console.log(InParam);
    for (const arb of InParam.operArr) {
      if (arb === true) {
        rrrr = 1;
        break;
      }
    }
    if (rrrr === 0) {
      InParam.operArr.fill(true);
    }

    let cou = InParam.count;
    let r = InParam.range;
    let o = InParam.operArr;

    for (let i = 0; i < cou; i++) {
      const x = Object.create(dataObject);
      x.id = i;
      const a = Math.round(Math.random() * r);
      const b = Math.round(Math.random() * r);
      let c = Math.round(Math.abs(Math.random() * 3));
      //   console.log(c);
      let opop = "-";
      //   console.log(c);
      while (o[c] !== true) {
        c = Math.round(Math.abs(Math.random() * 3));
      }
      switch (c) {
        case 0:
          x.answer = Math.floor(a / b);
          opop = "/";
          break;

        case 1:
          x.answer = a * b;
          opop = "*";
          break;

        case 2:
          x.answer = a + b;
          opop = "+";
          break;

        case 3:
          x.answer = a - b;
          opop = "-";
          break;
      }
      x.question = `what is ${a} ${opop} ${b} ?`;
      dataObjectArray[i] = x;
    }
    // console.log(dataObjectArray);
    props.passToApp(dataObjectArray);
    return "";
  }

  //   return <div></div>;
}
