import React from 'react';
import './App.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { GrGallery } from 'react-icons/gr';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <Drawer size='25vw' open={isOpen} onClose={toggleDrawer} direction='left'>
        <div className='Drawer'>hello world</div>
      </Drawer>
      <img className='App-title' src='/img/splash.png' alt='splash' />
      <GrGallery className='Gallery-button' onClick={toggleDrawer} />
      <div className='App-image-container'>
        <img className='App-image' src='/img/image00.png' alt='image00' />
      </div>
    </div>
  );
}

export default App;
