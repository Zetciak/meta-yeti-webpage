import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  firstBackgrounds: {
    margin: '0px auto',
  },

  blueBg: {
    backgroundImage: 'url(https://i.imgur.com/B9hJSF8.png)',
    width: '100%',
    height: '915px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    zIndex: 2,
  },

  secondBlueBg: {
    background: '#184093',
    width: '100%',
    height: '418px',
    position: 'absolute',
    marginTop: '678px',
    zIndex: 0,
  },

  artBg: {
    backgroundImage: 'url(https://i.imgur.com/ikU5xij.png)',
    width: '1920px',
    height: '1095px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1588px
  ['@media (max-width: 1588px)']: {
    artBg: {
      left: -150,
    },
  },

  //1440px
  ['@media (max-width: 1440px)']: {
    artBg: {
      left: -180,
    },
  },

  //1400px
  ['@media (max-width: 1400px)']: {
    artBg: {
      left: -220,
    },
  },

  //1360px
  ['@media (max-width: 1360px)']: {
    artBg: {
      left: -260,
    },
  },

  //1280px
  ['@media (max-width: 1360px)']: {
    artBg: {
      display: 'none',
    },
  },
});

export default useStyles;
