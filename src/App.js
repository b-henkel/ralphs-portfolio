import React from 'react';
import { useState } from 'react';
import './App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {
  RiGalleryLine,
  RiCloseCircleLine,
  RiInformationLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
} from 'react-icons/ri';
import imageData from './images.json';
import Statement from './components/Statement';

function App() {
  const [imageShown, setImageShown] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [statementOpen, setStatementOpen] = useState(false);
  const imagesArr = imageData.images;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleInfo = () => {
    setInfoIsOpen((prevState) => !prevState);
  };

  const imagesSorted = imageData.catagories.map(() => []);
  for (let i = 0; i < imageData.catagories.length; i++) {
    imagesArr.forEach((item) => {
      if (item.catagory === imageData.catagories[i]) {
        imagesSorted[i].push(item);
      }
    });
  }

  const prevButtonClick = () => {
    if (imageShown === 0) {
      setImageShown(imagesArr.length - 1);
    } else {
      setImageShown(imageShown - 1);
    }
  };

  const nextButtonClick = () => {
    if (imageShown === imagesArr.length - 1) {
      setImageShown(0);
    } else {
      setImageShown(imageShown + 1);
    }
  };

  const styles = {
    backgroundColor: 'rgba(50,50,50,0.9)',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    webkitScrollbar: { display: 'none' },
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevButtonClick();
    }
    if (e.key === 'ArrowRight') {
      nextButtonClick();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      setInfoIsOpen(false);

      setStatementOpen(false);
    }
  };

  return (
    <div className='App' tabIndex='0' onKeyDown={(e) => handleKeyDown(e)}>
      <Drawer
        size='20vw'
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        style={styles}
      >
        <div className='Drawer-style'>
          <RiCloseCircleLine
            className='Close-button'
            onClick={() => setIsOpen(false)}
          />
          <div>
            {imageData.catagories.map((item, index) => {
              return (
                <>
                  <div className='Catagory-heading'>{item}</div>
                  <ul className='App-catagory'>
                    {imagesSorted[index].map((image) => {
                      return (
                        <li className='List-item'>
                          <img
                            src={image.thumb}
                            alt={image.title}
                            style={{ maxHeight: '10vh' }}
                            onClick={() => {
                              setImageShown(
                                imagesArr.findIndex(
                                  (elm) => elm.title === image.title
                                )
                              );

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
          </div>
          <footer className='Drawer-nav'>
            <button
              className='Nav-button'
              onClick={() => {
                setStatementOpen(true);
              }}
            >
              Artist Statement
            </button>
          </footer>
        </div>
      </Drawer>
      <Drawer
        style={styles}
        size='25vh'
        open={infoIsOpen}
        onClose={toggleInfo}
        direction='bottom'
      >
        <div className='Drawer-style'>
          <RiCloseCircleLine
            className='Close-button'
            onClick={() => setInfoIsOpen(false)}
          />
          <div className='Info-text'>
            <h1>{imagesArr[imageShown].title}</h1>
            <br></br>
            <h3>{imagesArr[imageShown].date}</h3>
            <p>{imagesArr[imageShown].info}</p>
          </div>
        </div>
      </Drawer>
      <img className='App-title' src='/img/image07.jpg' alt='splash' />
      <RiGalleryLine className='Gallery-button' onClick={toggleDrawer} />
      <RiInformationLine className='Info-button' onClick={toggleInfo} />
      <div className='App-image-container'>
        {statementOpen && <Statement setStatementOpen={setStatementOpen} />}
        <img
          className='App-image'
          src={imagesArr[imageShown].source}
          alt={imagesArr[imageShown].title}
        />
      </div>
      <RiArrowLeftCircleLine className='Left-arrow' onClick={prevButtonClick} />
      <RiArrowRightCircleLine
        className='Right-arrow'
        onClick={nextButtonClick}
      />
    </div>
  );
}

export default App;
