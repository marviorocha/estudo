import Head from "next/head";
import Nav from "../components/nav";

const About = () => {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Página Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1 className="text-2xl">Page About</h1>
      <div className='container'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat rerum molestiae, fugiat eligendi corrupti ab.
      </div>
      <div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
  <p className="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
    </div>
  );
};

export default About;
