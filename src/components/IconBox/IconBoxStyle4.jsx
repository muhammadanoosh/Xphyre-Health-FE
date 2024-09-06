import React, { useState } from 'react';

export default function IconBoxStyle4({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const wordLimit = 3;
  const shortDescription = getShortDescription(description, wordLimit);

  return (
    <div
      className="cs_iconbox cs_style_4"
      style={{
        height: isExpanded ? '93%' : '13rem',
        transition: 'height 0.3s ease',
      }}
    >
      <h2 className="cs_iconbox_title cs_fs_32 cs_main_heading_color">{title}</h2>
      <div>
        <p
          className="cs_iconbox_subtitle m-0 para_color"
          style={{
            maxHeight: isExpanded ? '100rem' : '3rem', // Adjust the maxHeight for text expansion
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
            opacity: isExpanded ? 1 : 0.8, // Adjust the opacity for a smooth effect
          }}
        >
          {isExpanded ? description : shortDescription}
        </p>
        <button
          style={{ border: 'none', borderRadius: '0.5rem' }}
          onClick={toggleExpand}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
