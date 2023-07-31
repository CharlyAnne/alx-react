import './App.css';
import React from 'react';
import Header from './Header/Header';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      {/*React fragment */}
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
