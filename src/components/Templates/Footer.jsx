import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='container-footer'>
      <Link
        style={{
          display: 'block',
          color: '#bce7de',
          textDecoration: 'none',
          fontSize: '18px',
          marginLeft: '12px',
        }}
        to={'//gmail.com'}>
        @ Created by Gaidukova Olesia
      </Link>
      <ul style={{ display: 'flex' }}>
        <li>
          <Link
            style={{
              display: 'block',
              textDecoration: 'none',
              marginLeft: '12px',
            }}
            to={'//www.instagram.com'}>
            <img style={{ width: '30px', height: '30px' }} src='/images/instagram.svg' alt='instagram'/>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: 'block',
              textDecoration: 'none',
              marginLeft: '12px',
            }}
            to={'//www.facebook.com'}>
            <img style={{ width: '30px', height: '30px' }} src='/images/facebook.svg' alt='facebook'/>
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: 'block',
              color: 'white',
              textDecoration: 'none',
              marginLeft: '12px',
            }}
            to={'//www.twitter.com'}>
            <img style={{ width: '30px', height: '30px' }} src='/images/twitter.svg' alt='twitter'/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
