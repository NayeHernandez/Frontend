import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          Logo
        </Link>
        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
          {!loggedIn ? (
            <React.Fragment>
              <li style={{ marginRight: '15px' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link to="/register" style={{ textDecoration: 'none', color: '#fff' }}>
                  Registrarse
                </Link>
              </li>
            </React.Fragment>
          ) : null}
        </ul>
        {loggedIn ? (
          <button style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#f50057', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
