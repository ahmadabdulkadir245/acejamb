import Head from "next/head";
import Quiz from "../../components/Quiz";

function Answers({ questions }) {
  return (
    <div>
      {" "}
      <Head>
        <title>Jamb CBT Test</title>
      </Head>
      <Quiz questions={questions} />
    </div>
  );
}

export default Answers;
export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/questions`);
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
