import AppRouter from './Routers/AppRouter';
import React from 'react';

function App() {
  const appStyle = {
    backgroundColor: '#f0f0f0', // Color de fondo para el componente App
    minHeight: '100vh', // Asegura que el componente ocupe al menos el 100% del alto de la ventana
    fontFamily: 'Arial, sans-serif', // Estilo de fuente predeterminado
  };

  return (
    <div style={appStyle}>
      <AppRouter />
    </div>
  );
}

export default App;
