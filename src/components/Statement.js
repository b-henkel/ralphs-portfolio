import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function Statement({ setStatementOpen }) {
  return (
    <div className='Modal-background'>
      <div className='Modal-content'>
        <div className='Modal-close-button'>
          <RiCloseCircleLine
            onClick={() => {
              setStatementOpen(false);
            }}
          />
        </div>
        <div>
          <h1>Artist Statement</h1>
          <div className='Modal-body'>
            <img
              className='Statement-image'
              src='./img/statement.jpg'
              alt='statement'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statement;
