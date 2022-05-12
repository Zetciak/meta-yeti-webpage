import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    width: '1600px',
    margin: '0px auto',
    marginTop: '94px',
    'z-index': '50',
    position: 'relative',
  },

  elementsDiv: {
    width: '520px',
  },

  whiteTitle: {
    width: '100%',
    fontFamily: 'Rubik Mono One',
    fontStyle: 'medium',
    fontWeight: '400',
    fontSize: '72px',
    lineHeight: '80px',
    'text-transform': 'capitalize',
    color: '#ffffff',
  },

  blueTitle: {
    width: '100%',
    fontFamily: 'Rubik Mono One',
    fontStyle: 'medium',
    fontWeight: '400',
    fontSize: '55px',
    lineHeight: '64px',
    'text-transform': 'capitalize',
    color: '#00A6F1',
  },

  description: {
    width: '100%',
    marginTop: '16px',
    fontFamily: 'Satoshi-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0.01em',
    color: '#FFFFFF',
  },

  bottomSection: {
    marginTop: '40px',
  },

  bottomSectionBtn: {
    width: '175px',
    height: '56px',
    border: 'transparent',
    background: '#00A6F1',
    borderRadius: '8px',
    transition: 'background .5s',
    boxShadow: 'none',
    float: 'left',

    '&:hover': {
      background: '#0099f1',
      boxShadow: 'none',
    },

    '& p': {
      fontFamily: 'Satoshi-Black',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: '16px',
      lineHeight: '24px',
      'letter-spacing': '0.01em',
      textTransform: 'uppercase',
      color: '#ffffff',
    },
  },

  discordHref: {
    marginLeft: '48px',
    float: 'left',
    opacity: '1',
    transition: 'opacity .5s',

    '&:hover': {
      opacity: '0.7',
    },
  },

  discordLogoBtn: {
    width: '56px',
    height: '56px',
    float: 'left',
  },

  joinDiscord: {
    float: 'left',
    fontFamily: 'Satoshi-Black',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '16px',
    lineHeight: '24px',
    'letter-spacing': '0.01em',
    textTransform: 'uppercase',
    color: '#ffffff',
    marginTop: '16px',
    marginLeft: '16px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1920px
  ['@media (max-width: 1920px)']: {
    mainDiv: {
      width: '84%',
    },
  },
});

export default useStyles;
