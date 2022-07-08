import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function Cv({ setCvOpen }) {
  return (
    <div className='Modal-background'>
      <RiCloseCircleLine
        className='Close-button'
        onClick={() => {
          setCvOpen(false);
        }}
      />
      <div className='Cv-content'>
        <h1>CV</h1>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    </div>
  );
}

export default Cv;
