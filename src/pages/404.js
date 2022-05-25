import React from 'react';
import Head from 'next/head';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="Nothing to see here" />
      </Head>

      <Alert severity="error">
        <AlertTitle>404 Not Found</AlertTitle>
        <Typography paragraph>We could not find the page you are looking for.</Typography>
        <Button size="small" onClick={() => router.back()} variant="outlined" color="error">
          Go back
        </Button>
      </Alert>
    </>
  );
};
export default NotFoundPage;
