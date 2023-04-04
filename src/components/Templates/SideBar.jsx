import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
        <div style={{ padding: '10px' }}>
          <Link
            style={{
              display: 'block',
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              marginBottom: '20px',
              marginLeft: '12px',
              marginTop: '20px',
            }}
            to='/quiz'
          >
            Home
          </Link>
          <Link
             style={{
               display: 'block',
               color: 'white',
               textDecoration: 'none',
               fontSize: '18px',
               marginBottom: '20px',
               marginLeft: '12px',
               marginTop: '20px',
             }}
             to='/quiz/create'
          >
            Add new quiz
          </Link>
          <Link
             style={{
               display: 'block',
               color: 'white',
               textDecoration: 'none',
               fontSize: '18px',
               marginBottom: '20px',
               marginLeft: '12px',
               marginTop: '20px',
             }}
             to='/quiz/favourites'
          >
            Favourites
          </Link>
        </div>
  );
}
