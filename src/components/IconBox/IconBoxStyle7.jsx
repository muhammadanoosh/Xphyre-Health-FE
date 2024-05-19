import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import arrow_white from '../../assets/icons/arrow_white.svg';


export default function IconBoxStyle6({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_7">
      <div className="cs_iconbox_icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0">{parser(subTitle)}</p>
    </div>
  );
}
