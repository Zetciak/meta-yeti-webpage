import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
    width: '1600px',
    height: '93px',
    margin: '0px auto',
    background: 'transparent',
    borderBottom: '1px solid #FFFFFF33',
    overflow: 'hidden',
    'z-index': '50',
    position: 'relative',
  },

  toolBar: {
    margin: '0px',
    padding: '0px',
  },

  logoDiv: {
    marginTop: '5px',
    width: '96px',
    height: '96px',
  },

  centerElements: {
    marginLeft: 'auto',
    marginTop: '5px',
    '& ul': {
      '& li': {
        fontFamily: 'Satoshi-Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        display: 'inline-block',
        paddingLeft: '72px',
        '& a': {
          color: '#FFFFFF',
          transition: 'color .5s',
          '&:hover': {
            color: '#cccccc',
            cursor: 'pointer',
          },
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },

  rightElements: {
    marginLeft: 'auto',
    marginTop: '15px',
    '& ul': {
      '& li': {
        display: 'inline-block',
        paddingLeft: '32px',
        '& a': {
          opacity: '1',
          transition: 'opacity .5s',
          '&:hover': {
            opacity: '0.8',
          },
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },

  rightElementsElement: {
    width: '32px',
    height: '32px',
    opacity: '1',
    transition: 'opacity .5s',

    '&:hover': {
      opacity: '0.7',
    },
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1920px
  ['@media (max-width: 1920px)']: {
    appBar: {
      width: '84%',
    },
  },

  //1200px
  ['@media (max-width: 1200px)']: {
    centerElements: {
      display: 'none',
    },
  },

  //360px
  ['@media (max-width: 360px)']: {
    rightElements: {
      marginLeft: '0px',
      '& ul': {
        '& li': {
          paddingLeft: '18px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },
  },
});

export default useStyles;
