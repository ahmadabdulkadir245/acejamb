import Head from "next/head";
import Quiz from "../components/Quiz";

function Mcq({ questions }) {
  return (
    <div>
      <Head>
        <title>Jamb CBT Test</title>
      </Head>
      <Quiz questions={questions} />
      {/* <Results questions={questions} /> */}
    </div>
  );
}

export default Mcq;
export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/questions`);
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
