import { useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Main from "../components/Main";
export default function Component() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className='lg:max-w-screen-3xl  m-auto  iceland'>
        <Head>
          <title>Jamb CBT Test</title>
        </Head>
        <Header />
        <Main />
        <br />
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
