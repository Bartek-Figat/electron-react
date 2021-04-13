export const dashboardStyleCss = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    mainLeft: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0.15',
      height: '100vh',
    },
    sidebar: {
      top: {
        display: 'flex',
        height: '20vh',
        backgroundColor: `#252f3e`,
      },
      bottom: {
        display: 'flex',
        height: '80vh',
        backgroundColor: `#334052`,
      },
      list: {
        display: 'flex',
        flexDirection: 'column',
        flex: '.9',
        textDecoration: 'none',
        margin: '0 auto',
        marginTop: '1rem',
        padding: '0px',
      },
      itemList: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '40px',
        margin: '10px',
        fontWeight: 600,
        paddingLeft: '6px',
        borderRadius: '6px',
        paddingRight: '6px',
        letterSpacing: '0.025em',
        textDecorationLine: 'none',
      },
      link: {
        display: 'flex',
        textDecoration: 'none',
        alignSelf: 'center',
        color: 'rgb(222, 222, 222)',
        textDecorationLine: 'none',
      },
    },
    mainRight: {
      display: 'flex',
      flex: '0.85',
      height: '100vh',
    },
  },
};
