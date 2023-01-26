import Head from 'next/head';
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.io" />
      </Head>
        <main>
          <h1 className='text-3xl font-bold underline'>About</h1>
        </main>
    </div>
  )
}
