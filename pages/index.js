import Head from 'next/head';
import Welcome from './components/welcome';

export default function Home() {
  return (
    <>
      <Head>
        <title>BooksApp</title>
      </Head>
      <main>
        <Welcome />
      </main>
    </>
  );
}
