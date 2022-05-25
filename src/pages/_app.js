import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '@theme/ThemeProvider';

const MyApp = (props) => {
  const { Component, pageProps, emotionCache, router } = props;
  return (
    <ThemeProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
