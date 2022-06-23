import React from 'react';
import { useState } from 'react';
import './App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { GrGallery } from 'react-icons/gr';
import imageData from './images.json';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [imageShown, setImageShown] = useState(imageData.images[0].source);

  return (
    <div className='App'>
      <Drawer size='25vw' open={isOpen} onClose={toggleDrawer} direction='left'>
        <div className='Drawer'>
          {imageData.catagories.map((item) => {
            return (
              <>
                <h1>{item}</h1>
                <ul className='App-catagory'>
                  {imageData.images.map((image, index) => {
                    if (imageData.images[index].catagory === item) {
                      return (
                        <li>
                          <img
                            src={imageData.images[index].source}
                            alt={imageData.images[index].title}
                            style={{ width: 150 }}
                            onClick={() =>
                              setImageShown(imageData.images[index].source)
                            }
                          ></img>
                        </li>
                      );
                    }
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </Drawer>
      <img className='App-title' src='/img/splash.png' alt='splash' />
      <GrGallery className='Gallery-button' onClick={toggleDrawer} />
      <div className='App-image-container'>
        <img className='App-image' src={imageShown} alt='image00' />
      </div>
    </div>
  );
}

export default App;
