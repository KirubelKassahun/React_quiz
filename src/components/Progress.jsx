/* eslint-disable react/prop-types */


export default function Progress({ index, numQuestion, points, maxPossiblePoints }) {
  return (
    <header className="progress">
        <progress max={numQuestion} value={index} />
      <p>
        Question <strong>{index}</strong>/{numQuestion}
      </p>
      <p><strong>{points}</strong>/ {maxPossiblePoints}</p>
    </header>
  );
}
