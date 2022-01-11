import React from "react";

export default function ResultCard(props) {
  const obj = props.in;
  return (
    <div style={{ color: obj.w ? "green" : "red" }}>
      <h2>
        Question {obj.id + 1} {obj.question}
      </h2>
      <p>your ans = {obj.userAnswer}</p>
      <p>write ans = {obj.answer}</p>
    </div>
  );
}
