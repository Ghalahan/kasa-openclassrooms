// Import React and useState
import React, { useState, useEffect, useRef } from 'react';

// Import image for arrow icon
import expandArrow from '../Assets/expand_arrow.png';

function Collapse({ title, text, className }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setHeight(open ? `inherit`:'0px');
  }, [open]);

  return (
    <div className={`${className} ${open ? 'open' : ''}`}>
      <button className="collapse__container" onClick={toggle}>
        <span className="collapse__title">{title}</span>
        <img
          className={!open ? 'expand_icon' : 'expand_icon expand_icon--opened'}
          src={expandArrow}
          alt="Cliquez-ici pour dérouler le texte"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height, overflow: 'hidden', transition: 'height 0.3s ease' }}
        className="collapse__text"
      >
        {Array.isArray(text)?<ul>{text.map(content=><li className='collapse-list' key={content}>{content}</li>)}</ul>:text} 
      </div>
    </div>
  );
}

export default Collapse;
