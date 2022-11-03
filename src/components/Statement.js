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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nesciunt totam vitae molestias quod rerum quibusdam quam,
            voluptatibus doloribus dolore culpa sequi repudiandae consequatur
            illo eius accusantium obcaecati cum ab facere corporis ut!
            Asperiores quibusdam illo amet non. Quibusdam, sed. Magnam commodi
            nihil facere, asperiores inventore excepturi fuga veritatis ab saepe
            est expedita iste perspiciatis id nostrum corrupti quod aspernatur
            eum maxime. Quae id velit eaque, illo modi molestiae voluptate quas
            rem reprehenderit fugit magni, sequi illum consequuntur porro
            assumenda pariatur itaque in incidunt. Commodi reprehenderit fuga
            quod, eveniet aliquam, repellendus voluptates molestias odio
            suscipit itaque aperiam. Aut beatae sapiente optio rem ut omnis nemo
            molestias ipsum totam, quibusdam enim deserunt est itaque. Culpa
            aliquid beatae, eveniet natus hic amet laborum consequuntur rerum
            neque soluta sapiente earum nulla quos, quis odio alias labore
            facilis totam ipsum quaerat voluptatibus corporis deserunt
            architecto. Exercitationem consequatur dicta, quia fugit minus eos
            sit autem.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statement;
