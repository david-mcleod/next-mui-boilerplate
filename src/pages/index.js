import Head from 'next/head';
import Alert from '@mui/material/Alert';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Alert severity="success">This is a next js page</Alert>
    </>
  );
}
