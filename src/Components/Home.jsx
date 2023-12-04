import React from 'react';

const Home = ({ loggedIn, user }) => {
  return (
    <div>
      {loggedIn ? (
        <h1>Bienvenido, {user && user.username}!</h1>
      ) : (
        <h1>Bienvenido al sitio</h1>
      )}
      <p>Contenido de la página principal.</p>
    </div>
  );
};

export default Home;
