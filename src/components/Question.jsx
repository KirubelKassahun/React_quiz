/* eslint-disable react/prop-types */

import Optons from "./Optons";

export default function Question({ question , dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
    <Optons question={question} dispatch={dispatch} answer = {answer}  />
    </div>
  );
}
