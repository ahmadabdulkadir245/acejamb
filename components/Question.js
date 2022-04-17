function Question({ questions, number }) {
  return (
    <div>
      {questions.map((questionNum) => {
        if (questionNum.id === number) {
          return (
            <p key={questionNum.id} className='flex'>
              {questionNum.question}
            </p>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default Question;
