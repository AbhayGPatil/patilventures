import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Patil Ventures — Intelligent Solutions</title>
        <meta
          name="description"
          content="Patil Ventures crafts AI agents and cutting‑edge web experiences to elevate your business."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}