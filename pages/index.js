import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import useRouter from "next/router";
import Quiz from "../components/Quiz";
export default function Home({ questions }) {
  const [newQuestion, setNewQuestion] = useState([]);

  const fetchQuestions = async () => {
    const response = await fetch(`/api/questions`);
    const data = await response.json();
  };
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <Head>
          <title>Jamb CBT Test</title>
        </Head>
        <Quiz questions={questions} />
      </div>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export async function getServerSideProps(context) {
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
