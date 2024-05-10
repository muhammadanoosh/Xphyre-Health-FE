import React from 'react';
import parse from 'html-react-parser';

export default function TextWidget({ logoUrl, text }) {
  return (
    <div className="cs_text_widget">
      {text && <p className="cs_medium">{parse(text)}</p>}
      {logoUrl && <img src={logoUrl} alt="Logo" />}
    </div>

  );
}
