import React from 'react';
import { useState } from 'react';
import './App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RiGalleryLine, RiCloseCircleLine } from 'react-icons/ri';
import imageData from './images.json';
import Cv from './components/Cv';
import Statement from './components/Statement';

function App() {
  const [imageShown, setImageShown] = useState(imageData.images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [statementOpen, setStatementOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const imagesSorted = imageData.catagories.map(() => []);
  for (let i = 0; i < imageData.catagories.length; i++) {
    imageData.images.forEach((item) => {
      if (item.catagory === imageData.catagories[i]) {
        imagesSorted[i].push(item);
      }
    });
  }

  return (
    <div className='App'>
      <Drawer size='25vw' open={isOpen} onClose={toggleDrawer} direction='left'>
        <div className='Drawer'>
          <RiCloseCircleLine
            className='Close-button'
            onClick={() => setIsOpen(false)}
          />
          {imageData.catagories.map((item, index) => {
            return (
              <>
                <h1>{item}</h1>
                <ul className='App-catagory'>
                  {imagesSorted[index].map((image) => {
                    return (
                      <li>
                        <img
                          src={image.source}
                          alt={image.title}
                          style={{ maxHeight: '10vh' }}
                          onClick={() => {
                            setImageShown(image);
                            setCvOpen(false);
                            setStatementOpen(false);
                          }}
                        ></img>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
          <div className='Drawer-nav'>
            <button
              onClick={() => {
                setStatementOpen(true);
                setCvOpen(false);
              }}
            >
              Artist Statement
            </button>
            <button
              onClick={() => {
                setCvOpen(true);
                setStatementOpen(false);
              }}
            >
              CV
            </button>
          </div>
        </div>
      </Drawer>
      <img className='App-title' src='/img/splash.png' alt='splash' />
      <RiGalleryLine className='Gallery-button' onClick={toggleDrawer} />
      <div className='App-image-container'>
        {cvOpen && <Cv setCvOpen={setCvOpen} />}
        {statementOpen && <Statement setStatementOpen={setStatementOpen} />}
        <img
          className='App-image'
          src={imageShown.source}
          alt={imageShown.title}
        />
      </div>
    </div>
  );
}

export default App;
