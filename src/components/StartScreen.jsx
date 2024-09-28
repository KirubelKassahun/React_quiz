/* eslint-disable react/prop-types */
export default function StartScreen({ numQuestion, dispatch }) {
  return (
    <div>
      <h2> Welcome to The React Quiz </h2>
      <h3>{numQuestion} Question to test your React Mastery </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s Start
      </button>
    </div>
  );
}
