import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function Cv({ setCvOpen }) {
  return (
    <div className='Modal-background'>
      <div className='Modal-content'>
        <div className='Modal-close-button'>
          <RiCloseCircleLine
            onClick={() => {
              setCvOpen(false);
            }}
          />
        </div>
        <div>
          <h1>CV</h1>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cv;
