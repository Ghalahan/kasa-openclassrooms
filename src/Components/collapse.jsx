// Import React and useState
import React, { useState } from 'react';

// Import image for arrow icon
import expandArrow from '../Assets/expand_arrow.png';

function Collapse({ title, text, className }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

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
      {open && <div className="collapse__text">{text}</div>}
    </div>
  );
}

export default Collapse;
