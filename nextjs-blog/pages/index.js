import Head from 'next/head'
import Nav from "../components/nav";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Radio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  );
}
