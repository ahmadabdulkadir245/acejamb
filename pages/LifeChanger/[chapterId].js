import Head from "next/head";
import { useState } from "react";
import useRouter from "next/router";
import Quiz from "../../components/Quiz";
function ChapterNumbers({ questions }) {
  const [newQuestion, setNewQuestion] = useState([]);

  const fetchQuestions = async () => {
    const response = await fetch(`/api/questions`);
    const data = await response.json();
  };

  return (
    <div>
      <Head>
        <title>Jamb CBT Test</title>
      </Head>
      <Quiz questions={questions} />
    </div>
  );
}

export default ChapterNumbers;

export async function getServerSideProps(context) {
  const { params } = context;
  console.log("what up man");
  console.log(params);

  const { chapter } = params;
  const response = await fetch(
    `http://localhost:3000/api/questions/chapterOne`
  );
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
