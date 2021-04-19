export const fstCardList = {
  main: {
    display: 'flex',
    margin: '0.1rem',
  },
  wrapperList: {
    display: 'flex',
    width: '100%',
  },
  li: {
    padding: '1rem',
    width: '100%',
    display: 'flex',
    textDecoration: 'none',
    color: 'rgb(17, 24, 39)',
    backgroundColor: 'rgb(249 253 255)',
  },
};

export const CardList = ({ children, ...res }) => (
  <ul className="fst__card--list" {...res} style={fstCardList.main}>
    {children}
  </ul>
);
