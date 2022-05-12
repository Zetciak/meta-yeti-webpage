//Imports
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';

//CSS
import '../styles/globals.css';

//Script
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
