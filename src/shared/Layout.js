import React from 'react';

const HeaderStyles = {
  width: '100%',
  background: 'black',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  color: 'white',
  fontWeight: '600',
};

const layoutStyles = {
  display: 'flex',
	flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '65vh',
}

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>Todo-List App</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{...layoutStyles}}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
