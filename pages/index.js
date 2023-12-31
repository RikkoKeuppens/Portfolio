import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Internship from "../components/Internship";

export default function Home() {
  return (
    <div id="main-body">
      <Head>
        <title>Rikko Keuppens</title>
        <meta name='description' content='Portfolio by Rikko Keuppens' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <About />
      <Skills />
        <Internship/>
      <Projects />
      <Contact />
    </div>
  );
}
