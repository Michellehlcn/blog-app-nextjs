
import Main from './Main';
import About from './About';
import Skills from '../components/lib/Skills';
import Portfolios from './Portfolios';
import Contact from './Contact';

import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Michellehlcn</title>
        <meta name="description" content="Michellehlcn's portfolio | Full-stack Developer" />
       
      </Head>
     
      <Main />
      {/* <About />
      <Skills/>
      <Portfolios />
      <Contact /> */}
      {/* <main>
        <div>
          <h1 className='text-3xl font-bold underline'>About</h1>   
        </div>
      </main> */}
    </>
  )
}
