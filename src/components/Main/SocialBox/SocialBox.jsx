import React from 'react';

function SocialBox({ className, imageFile, altText }) {
  return (
    <a href="#test" target="_blank" draggable="true" className={`${className} flex`}>
      <img src={imageFile} alt={altText} />
    </a>
  );
}

export default SocialBox;