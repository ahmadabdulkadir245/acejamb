import Options from "../components/Options";

function Question({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <p>{question.option}</p>
        </div>
      ))}
      {/* <Options questions={questions} /> */}
    </div>
  );
}

export default Question;
