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
        flex: '.7',
        textDecoration: 'none',
        color: '#fff',
        margin: '0 auto',
        marginTop: '3rem',
        padding: '0px',
      },
      itemList: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        margin: '.1rem',
        listStyle: 'none',
        fontSize: '1.2rem',
        borderRadius: '5px',
      },
      link: {
        textDecoration: 'none',
        color: '#fff',
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
