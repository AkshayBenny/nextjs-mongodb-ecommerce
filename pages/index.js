import Head from 'next/head';

export default function Home() {
  fetch('/api/products')
    .then((res) => res.json())
    .then((data) => console.log(data));
    
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
    //hello world
  );
}
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
