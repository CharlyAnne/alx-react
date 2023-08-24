import './Footer.css';
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
};

export default Footer;
