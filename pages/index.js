import Head from "next/head";
import LandingPage from "./landing-page";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <LandingPage />
      </main>
    </div>
  );
}
