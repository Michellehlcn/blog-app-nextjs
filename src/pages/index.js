
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolios from '../components/Portfolios';
import Contact from '../components/Contact';

import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Michellehlcn</title>
        <meta name="description" content="Michellehlcn's portfolio | Full-stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Main />
      <About />
      <Skills/>
      <Portfolios />
      <Contact />
      {/* <main>
        <div>
          <h1 className='text-3xl font-bold underline'>About</h1>   
        </div>
      </main> */}
    </>
  )
}
