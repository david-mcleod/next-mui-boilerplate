import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

export const createEmotionCache = () => createCache({ key: 'css' });

const ThemeProvider = ({ children, emotionCache }) => (
  <CacheProvider value={emotionCache || createEmotionCache()}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </CacheProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  emotionCache: PropTypes.any,
};

ThemeProvider.defaultProps = {
  emotionCache: null,
};

export default ThemeProvider;
