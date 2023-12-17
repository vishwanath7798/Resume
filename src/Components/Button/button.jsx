import React, { useState } from 'react';

const Button = () => {
  const [isToggled, setToggled] = useState(false);
  const handleButtonClick = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isToggled ? 'Download pdf' : 'Download dox'}
      </button>
    </div>
  );
};

export default Button;